const router = require('express').Router();
const userRoutes = require('./api/user-routes');

router.use('api/', userRoutes);

module.exports = router;