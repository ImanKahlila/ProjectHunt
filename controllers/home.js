module.exports = {
    getIndex: (req, res) => {
        res.render("index.ejs");
    },

    getProfile: async (req, res) => {
        try {
            res.render("profile.ejs", { user: req.user });
        } catch (err) {
            console.log(err);
        }
    }
};