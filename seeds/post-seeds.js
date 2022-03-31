const { Post } = require('../models');

const postData = [{
        title: 'Who is he best basketball plauer of all time',
        content: 'It is obviously me, Michael Jordan',
        user_id: 1

    },
    {
        title: 'Who is the best current player',
        content: 'It is the King, me, Lebron James!',
        user_id: 2
    },
    {
        title: 'Most underrated player',
        content: 'None other than Dwyane Wade',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;