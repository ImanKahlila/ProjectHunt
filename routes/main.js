const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const authController = require("../controllers/auth");
const projectController = require("../controllers/projects");
const { ensureAuth } = require("../middleware/auth");

router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, homeController.getProfile);
router.get("/browse", projectController.searchProjects);

//Routes for user login/signup
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;