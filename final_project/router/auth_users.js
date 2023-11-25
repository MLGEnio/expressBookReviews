const express = require("express");
const jwt = require("jsonwebtoken");
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username) => {
  return typeof username === "string" && username.length > 0;
};

const authenticatedUser = (username, password) => {
  const user = users.find((u) => u.username === username);
  return user && user.password === password;
};

//only registered users can login
regd_users.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!isValid(username) || !password)
    return res.status(400).json({ message: "Invalid Credentials" });
  if (authenticatedUser(username, password)) {
    const token = jwt.sign({ username }, "SECRET_KEY", { expiresIn: "1h" });
    return res.json({ token });
  } else {
    return res.status(401).json({ message: "Auth failed" });
  }
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  const { isbn } = req.params;
  const { review } = req.body;
  const username = req.body.username; // Username should ideally come from authenticated user context

  if (books[isbn]) {
    books[isbn].reviews[username] = review;
    return res.json({ message: "Review added/updated" });
  } else {
    return res.status(404).json({ message: "Book not found" });
  }
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
