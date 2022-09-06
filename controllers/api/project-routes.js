const router = require("express").Router();
const { User, Project } = require("../../models");
const authLogin = require("../../utils/auth");

// fetch(`api/projects?subject=math`)

// get all projects (shown from newest to oldest)
router.get("/", (req, res) => {
  const { instu, subject } = req.query;
  const where = {};
  if (instu) {
    where.instu = instu;
  }

  if (subject) {
    where.subject = subject;
  }

  Project.findAll({
    // attributes: {
    //     include: [['created_at']]
    // },
    // newest posts will show first based on id number
    where,
    order: [["id", "ASC"]],
  })
    .then((allProjects) => res.json(allProjects))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a single project
router.get("/:id", (req, res) => {
  Project.findOne({
    // attributes: {
    //     include: [['created_at']]
    // },
    where: {
      id: req.params.id,
    },
  })
    .then((projectData) => res.json(projectData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a project
router.post("/", (req, res) => {
  Project.create({
    // these are all the data we'll need from input fields on frontend when the req is made
    // user_id: req.session.user_id,
    user_id: req.body.user_id,
    project_name: req.body.project_name,
    abstract: req.body.abstract,
    collab_status: req.body.collab_status,
    project_url: req.body.project_url,
    subject: req.body.subject,
    ongoing_status: req.body.ongoing_status,
  })
    .then((newProjectData) => res.json(newProjectData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a project
router.put("/:id", (req, res) => {
  Project.update({
    title: req.body.title,
    abstract: req.body.abstract,
    project_url: req.body.project_url,
    collab_status: req.body.collab_status,
  })
    .then((changedProject) => {
      if (!changedProject) {
        res.status(404).json({ message: "No project found matching this id" });
        return;
      }
      res.json(changedProject);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a project
router.delete("/:id", (req, res) => {
  Project.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deleteResults) => {
      if (!deleteResults) {
        res.status(404).json({ message: "No project found matching this id" });
        return;
      }
      res.json(deleteResults);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;