const Project = require("../models/Project");

module.exports = {
  // Render the home page
  getIndex: (req, res) => {
    res.render("index", {
      head: { title: "Home", css: "" },
      layout: "layout",
    });
  },

  // Render the user profile page
  getProfile: async (req, res) => {
    try {
      const projects = await Project.find({ creator_id: req.user.id });
      res.render("profile", {
        layout: "layout",
        projects: projects,
        user: req.user,
        head: { title: "Profile", css: "/css/pages/profile.css" },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
