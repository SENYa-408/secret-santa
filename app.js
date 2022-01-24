const express = require("express");
const engine = require("ejs-mate");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const viewRoutes = require("./routes/viewRoutes");
const userRoutes = require("./routes/userRoutes");
const santaReceiverRoutes = require("./routes/santaReceiverRoutes");

const app = express();

app.engine("ejs", engine);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.set("trust proxy", true);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(cors({origin: "http://localhost:3000"}));

// ROUTES
app.use("/", viewRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/santa-reciever", santaReceiverRoutes);

module.exports = app;