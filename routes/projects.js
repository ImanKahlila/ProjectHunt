const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projects");

router.get("/create", projectController.getCreate);
router.post("/createProject", projectController.createProject);

module.exports = router;