const Project = require("../models/Project");
const Organization = require("../models/Organization");
const Technology = require("../models/Technology");

module.exports = {
  // Render the create project form
  getCreate: async (req, res) => {
    try {
      res.render("create.ejs", {
        user: req.user,
        head: { title: "Create Project", css: "/css/pages/create-project.css" },
      });
      // Render the "create.ejs" view and pass the user and currentPage variables to the view
    } catch (err) {
      console.log(err);
    }
  },

  // get orgs from DB, map to array of names, and send to clientside(Organization.js) for awesomplete suggestions in organization field in the create project form
  getOrgs: async (req, res) => {
    try {
      const orgs = await Organization.find().lean();
      res.json(orgs.map((org) => org.name));
    } catch (err) {
      console.log(err);
    }
  },
  getTechnologies: async (req, res) => {
    try {
      const technologies = await Technology.find().lean();
      res.json(technologies);
    } catch (err) {
      console.log(err);
    }
  },
  // Create a new project
  createProject: async (req, res) => {
    try {
      // Extract selected technologies from request body
      const technologyNames = req.body.technologies.split(",");

      // Find technology models by name
      const technologies = await Technology.find({
        name: { $in: technologyNames },
      });

      await Project.create({
        creator_id: req.user.id,
        name: req.body.name,
        organization: req.body.org,
        description: req.body.description,
        githubUrl: req.body.url,
        skillLevel: req.body.skill,
        status: req.body.status,
        timezone: req.body.timezone,
        technologiesUsed: technologies,
      });

      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};
