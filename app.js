// Import express
let express = require("express");
// Import Mongoose
let mongoose = require("mongoose");
// Import Body parser
let bodyParser = require("body-parser");
const connectionstr =
  process.env.MONGODB_URI || "mongodb://localhost:27017/Login";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
};
// Added check for DB connection

mongoose.connect(connectionstr, options).then(
  () => {
    console.log("Database connection established!");
  },
  (err) => {
    console.log("Error connecting Database instance due to: ", err);
  }
);
const cors = require("cors");

var path = require("path");

// Initialise the app
const app = express();
const port = process.env.PORT || 8001;

app.use(cors());

app.options("*", cors());
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Import routes
const product = require("./routes/product.route"); // Imports routes for the products

// Send message for default URL

app.get("/", (req, res) => res.send("Hello World with Express"));

// Use Api routes in the App
app.use("/products", product);
// Launch app to listen to specified port

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
