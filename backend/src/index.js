const express = require("express"); // Import express
const bodyParser = require("body-parser"); // Import body-parser
const { PORT } = require("./utils/config"); // Import PORT from config.js
const routes =require("./routes/index.route"); // Import routes
const connectDB = require("./database/config");

const app = express();

app.use(bodyParser.json()); // Use body-parser middleware

app.use("/api", routes); // Use routes if the path is /api

connectDB();// Connect to the database
app.listen(PORT, () => {
  console.log("Server is running on port " +PORT);
});
