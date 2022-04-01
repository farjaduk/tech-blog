const seedUsers = require('./user-seeds');
const seedPosts = require('./posts-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    console.log('--------------');
    await seedPosts();
    console.log('--------------');
    await seedComments();
    console.log('--------------');

    process.exit(0);
};

seedAll();