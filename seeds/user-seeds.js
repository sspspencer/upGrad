const { User } = require('../models');
const sequelize = require('../config/connections');

const userdata = [
    {
        name: 'spencer',
        email: 'email@email.com',
        institution: 'carleton',
        id: 1
    },
    {
        name: 'sonja',
        email: 'something@email.com',
        institution: 'mac',
        id: 2
    },
    {
        name: 'janae',
        email: 'janae@email.com',
        institution: 'ryerson',
        id: 4
    },
]

const seedPosts = () => User.bulkCreate(userdata);

module.exports = seedPosts;
