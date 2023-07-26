const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mainRoutes = require("./routes/main");
const projectRoutes = require("./routes/projects");
const connectDB = require("./config/database");
const methodOverride = require("method-override");
const flash = require("express-flash");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const expressLayouts = require("express-ejs-layouts");

//Load .env file in config folder
dotenv.config({ path: "./config/config.env" }); // load config

// Passport config
require("./config/passport")(passport);

//Connect to Database
connectDB();

//Static Folder
app.use(express.static("public"));

//Using EJS for views and layout
app.set("view engine", "ejs");
app.use(expressLayouts);

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, etc...
app.use(flash());

//Setup Routes
app.use("/", mainRoutes);
app.use("/", projectRoutes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}/, you better catch it!`
  );
});
