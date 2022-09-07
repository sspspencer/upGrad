const router = require("express").Router();
const sequelize = require("sequelize");
const { User, Project } = require("../models");
const authLogin = require("../utils/auth");
const getWhereObj = require('../utils/projectQueryObj');

// display a list of projects on homepage authLogin,
router.get("/", authLogin, (req, res) => {
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

  router.get('/search', authLogin, (req, res) => {
    console.log('ENTERING ROUTE');
    const where = getWhereObj(req.query);
    Project.findAll({
      where,
      raw: true,
      order: [["id", "ASC"]],
    })
      .then((allProjects) => {
        // this is currently not going to be called because allProjects returns a '[]'
        if (!allProjects) {
          res.json({message: 'No results found for this search'});
        }
        console.log(allProjects);
        res.render('dashboard', {allProjects});
      })
      .catch((err) => {
        console.log('ENTERING ERROR');
        console.log(err);
        res.status(500).json(err);
      });
  })


router.get("/edit/:id", authLogin, (req, res) => {
  // get a project (based on project id)
  Project.findOne({
    where: {
      id: req.params.id,
    },
    // include the user's name
    include: [
      {
        model: User,
        attributes: ["name"],
      },
    ],
  })
    .then((projectData) => {
      if (!projectData) {
        res.status(404).end();
        return;
      }
      const project = projectData.get({ plain: true });
      // use the data from the response + loggedIn status to render edit-project.handlebars
      res.render("edit-project", {
        project,
        // loggedIn: req.session.loggedIn
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;