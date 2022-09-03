const { User } = require('../models');
const sequelize = require('../config/connections');

const userdata = [
    {
        name: 'Jack Sparrow',
        email: 'email@email.com',
        institution: 'carleton',
        //id: 1
    },
]

const seedPosts = () => User.bulkCreate(userdata);

module.exports = seedPosts;
