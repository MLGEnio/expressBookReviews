const express = require("express");
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();
public_users.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (isValid(username) && password) {
    users.push({ username, password });
    return res.status(201).json({ message: "User registered" });
  } else {
    return res.status(400).json({ message: "Invalid user data" });
  }
});

public_users.get("/", function (req, res) {
  res.json(Object.values(books));
});

public_users.get("/isbn/:isbn", function (req, res) {
  const book = books[req.params.isbn];
  book ? res.json(book) : res.status(404).send({ message: "Book not found" });
});

public_users.get("/author/:author", function (req, res) {
  const filteredBooks = Object.values(books).filter(
    (book) => book.author === req.params.author
  );
  res.json(filteredBooks);
});

public_users.get("/title/:title", function (req, res) {
  const filteredBooks = Object.values(books).filter(
    (book) => book.title === req.params.title
  );
  res.json(filteredBooks);
});

public_users.get("/review/:isbn", function (req, res) {
  const book = books[req.params.isbn];
  if (book) {
    res.json(book.reviews);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

module.exports.general = public_users;
