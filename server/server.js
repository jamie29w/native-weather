const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// const morgan = require("morgan");

const port = process.env.PORT || 7000;

// app.use(morgan());
app.use(bodyParser.json());
app.use(cors());

// ROUTES \\
app.use("/auth", require("./routes/auth"));

mongoose.connect("mongodb://localhost/weather", {keepAlive: true, reconnectTries: Number.MAX_VALUE, useMongoClient: true}, (err) => {
    if (err) throw err;
    console.log("*** CONNECTED TO THE WEATHER DATABASE ***");
});

app.listen(port, () => {
    console.log(`[+] Server is running on port ${port}`);
});
