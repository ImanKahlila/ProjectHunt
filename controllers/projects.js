const Project = require("../models/Project");

module.exports = {

    getCreate: async (req, res) => {
        try {
            res.render("create.ejs")
        } catch (err) {
            console.log(err)
        }
    },
    createProject: async (req, res) => {
        try {
            await Project.create({
                name: req.body.name,
                description: req.body.description,
                githubUrl: req.body.url,
                skillLevel: req.body.skill,
                status: req.body.status
            })
            console.log("Project created")
            res.redirect("/profile")
        } catch (err) {
            console.log(err)
        }
    }
}