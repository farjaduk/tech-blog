const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [{
        username: 'Michael',
        email: 'jordan123@gmail.com',
        password: 'jordan'

    },
    {
        username: 'Lebron',
        email: 'lebron123@gmail.com',
        password: 'james'
    },
    {
        username: 'Dwyane',
        email: 'wade123@gmail.com',
        password: 'wade'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;