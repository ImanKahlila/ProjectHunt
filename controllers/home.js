const Project = require("../models/Project");

module.exports = {
  // Render the home page
  getIndex: (req, res) => {
    res.render("index", { user: req.user, head: { title: "Home", css: "/css/pages/home.css" } });
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
  // getBrowse: async (req, res) => {
  //   try {
  //     console.log('yay')
  //     res.render("browse.ejs", {
  //       user: req.user,
  //       head: { title: "Browse", css: "/css/pages/browse.css" },
  //     });
  //     console.log('wtf')
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
};
