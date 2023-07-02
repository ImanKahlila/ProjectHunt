const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projects");
const { ensureAuth } = require("../middleware/auth");

router.get("/create", ensureAuth, projectController.getCreate);
router.post("/createProject", projectController.createProject);
router.get("/getOrgs", projectController.getOrgs);
router.get("/getTechnologies", projectController.getTechnologies);

module.exports = router;