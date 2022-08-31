const router = require('express').Router();
const userRoutes = require('./user-routes');

app.use('/users', userRoutes);

module.exports = router;