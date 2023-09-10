const Project = require("../models/Project");

module.exports = {
  // Render the home page
  getIndex: (req, res) => {
    res.render("index", { user: req.user, head: { title: "Home", css: "" } });
  },

  // Render the user profile page
  getProfile: async (req, res) => {
    try {
      const projects = await Project.find({ creator_id: req.user.id });
      res.render("profile", {
        projects: projects,
        user: req.user,
        head: { title: "Profile", css: "/css/pages/profile.css" },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
