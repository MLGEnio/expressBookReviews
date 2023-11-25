const express = require("express");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const customer_routes = require("./router/auth_users.js").authenticated;
const genl_routes = require("./router/general.js").general;

const app = express();

app.use(express.json());

app.use(
  "/customer",
  session({
    secret: "ustomer",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/customer/auth/*", function auth(req, res, next) {
  // Authentication mechanism here
  // Example: Check JWT token validity
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "SECRET_KEY");
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
});

const PORT = 8080;

app.use("/customer", customer_routes);
app.use("/", genl_routes);

app.listen(PORT, () => console.log("Server is running"));
