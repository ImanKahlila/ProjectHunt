module.exports = {
    // Render the home page
    getIndex: (req, res) => {
        res.render("index.ejs");
        // Render the "index.ejs" view
    },

    // Render the user profile page
    getProfile: async (req, res) => {
        try {
            res.render("profile.ejs", { user: req.user});
            // Render the "profile.ejs" view and pass the user and currentPage variables to the view
        } catch (err) {
            console.log(err);
        }
    }
};
