const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let message;
app.use(bodyParser.urlencoded({ extended: false }));
const userRoutes = require("./routes/user");
const messageRoutes = require("./routes/message");

app.use(userRoutes);
app.use(messageRoutes);
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not fount</h1>");
});
app.listen(4000);
module.exports = message;
