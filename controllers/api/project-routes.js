const router = require('express').Router();
const {User, Project} = require('../../model');

router.get('/', (req, res) => {
    Project.findAll({
        // newest posts will show first based on id number
        order: [['id', 'ASC']]
    })
});

module.exports = router;