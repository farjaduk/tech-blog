const { User } = require('../models');

const userData = [{
        username: 'Michael',
        password: 'jordan'

    },
    {
        username: 'Lebron',
        password: 'james'
    },
    {
        username: 'Dwyane',
        password: 'wade'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;