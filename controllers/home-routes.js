

const router = require("express").Router();
const sequelize = require("sequelize");
const { User, Project } = require("../models");
const authLogin = require("../utils/auth");

// homepage (prompt login & sign up)
router.get("/", (req, res) => {
  res.render("homepage");
});

// display a list of projects on homepage authLogin,
router.get("/dashboard", (req, res) => {
  Project.findAll({
    attributes: [
      'id',
      'project_name',
      'abstract',
      'collab_status',
      'ongoing_status',
      'project_url',
      'subject',
    ],
    include: [
      {
        model: User,
        attributes: ['name', 'institution'],
      },
    ],
  })
    .then((allProjects) => {
      // this formats the data Sequelize gives us in a readable format
      const projects = allProjects.map(project => project.get({ plain: true }));
      // use the data from the response + loggedIn status to render homepage.handlebars
      res.render("dashboard", {
        projects
        // loggedIn: req.session.loggedIn
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// display a specific project on its own page
router.get("project/:id", (req, res) => {
  Project.findOne({
    include: [
      {
        model: User,
        attributes: ["name", "institution"],
      },
    ],
  })
    .then((projectData) => {
      if (!projectData) {
        res.status(404).json({ message: "No project found with this id" });
        return;
      }
      // this formats the data Sequelize gives us in a readable format
      const project = projectData.get({ plain: true });
      // use the data from the response to render project-view.handlebars
      res.render("project-view", { project });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// display the login page
router.get("/login", (req, res) => {
  // if user is already logged in, redirect them to the homepage
  // if (req.session.loggedIn) {
  //     res.redirect('/');
  //     return;
  // }
  // render login.handlebars
  res.render("login");
});


router.get("/profile", (req, res) => {
  User.findOne
  res.render("profile");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;