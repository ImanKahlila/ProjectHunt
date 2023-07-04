const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projects");
const testController = require("../controllers/test");
const { ensureAuth } = require("../middleware/auth");

router.get("/create", ensureAuth, projectController.getCreate);
router.post("/createProject", projectController.createProject);
router.get("/getOrgs", projectController.getOrgs);
router.get("/getTechnologies", projectController.getTechnologies);
router.get("/test", testController.createTestData);

module.exports = router;