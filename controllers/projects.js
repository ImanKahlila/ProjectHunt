const Project = require("../models/Project");

module.exports = {
    // Render the create project form
    getCreate: async (req, res) => {
        try {
            res.render("create.ejs", { user: req.user, currentPage: 'create' });
            // Render the "create.ejs" view and pass the user and currentPage variables to the view
        } catch (err) {
            console.log(err);
        }
    },

    // Create a new project
    createProject: async (req, res) => {
        try {
            await Project.create({
                creator_id: req.user.id,
                name: req.body.name,
                description: req.body.description,
                githubUrl: req.body.url,
                skillLevel: req.body.skill,
                status: req.body.status,
                timezone: req.body.timezone,
            });
            // Create a new project in the database using the Project model and the data from the request body

            console.log("Project created");
            res.redirect("/profile");
            // Redirect the user to the profile page after the project is successfully created
        } catch (err) {
            console.log(err);
        }
    }
}
