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

    // get orgs from DB and send to clientside for use in creating an array(in Organization.js) for awesomplete for organizations field in the create project form
    getOrgs: async (req, res) => {
        try {
            const orgs = await Organization.find()
            res.json(orgs)
        } catch (err) {
            console.log(err);
        }
    },

    // Create a new project
    createProject: async (req, res) => {
        try {
            //check for existance of organization name in Organizatin collection to prevent duplicates
            let orgExists = await Organization.exists({name:req.body.org});
            //if non existant then create organization
            if (orgExists === false){
                await Organization.create({
                    name: req.body.org,
                    website: req.body.website,
                }); 
                console.log('new organization created');
            }
            //find the organization document(whether preextisting or newly created) in collection and assign to variable to allow access to the oraganization _id below
            let currentOrg = await Organization.find({name:req.body.org});
            console.log(currentOrg);

            await Project.create({
                creator_id: req.user.id,
                name: req.body.name,
                organization: currentOrg[0].id,
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
