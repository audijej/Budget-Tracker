const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
let MONGODB_URI = "mongodb://audijej:Silvia13!@ds037758.mlab.com:37758/heroku_xzzcp857"

const PORT = 9000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI, {useMongoClient: true})

// mongoose.connect("mongodb://heroku_xzzcp857:2u7kisgk6b1l0hsk78rr7f9f49@ds037758.mlab.com:37758/heroku_xzzcp857", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});