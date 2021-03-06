const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes");
const santaReceiverRoutes = require("./routes/santaReceiverRoutes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/santa-reciever", santaReceiverRoutes);

module.exports = app;