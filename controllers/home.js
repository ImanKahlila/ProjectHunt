const Project = require("../models/Project");

module.exports = {
  // Render the home page
  getIndex: (req, res) => {
    res.render("index.ejs", { currentPage: "home" });
    // Render the "index.ejs" view
  },

  // Render the user profile page
  getProfile: async (req, res) => {
    try {
      const projects = await Project.find({ creator_id: req.user.id });
      console.log({ projects });
      res.render("profile.ejs", {
        projects: projects,
        user: req.user,
        currentPage: "profile",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
