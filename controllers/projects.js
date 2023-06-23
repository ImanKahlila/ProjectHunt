const Project = require("../models/Project");
const Organization = require("../models/Organization");

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

    // get orgs from DB, map to array of names, and send to clientside(Organization.js) for awesomplete suggestions in organization field in the create project form
    getOrgs: async (req, res) => {
        try {
            const orgs = await Organization.find().lean();
            res.json(orgs.map((org) => org.name));
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
                organization: req.body.org,
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
