const express = require("express");
const app = express();
const dotenv = require("dotenv");
const homeRoutes = require("./routes/home");
const connectDB = require('./config/database');

//Load .env file in config folder
dotenv.config({ path: "./config/config.env" }); // load config

connectDB();

//Static Folder
app.use(express.static("public"));

//Using EJS for views
app.set("view engine", "ejs");

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setup Routes
app.use("/", homeRoutes);

//Server Running
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}/, you better catch it!`);
});