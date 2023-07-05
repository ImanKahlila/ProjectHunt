const Project = require("../models/Project");
const Organization = require("../models/Organization");
const Technology = require("../models/Technology");

const testOrgs = ['100Devs', 'Self-Taught', 'Tech Elevator'];
const testTechs = ['Javascript', 'Node.js', 'MongoDB', 'Express', 'Java', 'Python', 'React', 'ReactNative'];
module.exports = {
  //Populate DB with strings for testing
  createTestData: async (req, res) => {
    try {
      const orgCount = await Organization.countDocuments();
      if (orgCount < 3) {
        await testOrgs.forEach( org => {
          Organization.create({
            name: org
          })
        })
      }
      const techCount = await Technology.countDocuments();
      if (techCount < 8) {
        await testTechs.forEach( tech => {
          Technology.create({
            name: tech
          })
        })
      }
      res.redirect("/create");
    } catch (err) {
      console.log(err);
    }
  },
};
