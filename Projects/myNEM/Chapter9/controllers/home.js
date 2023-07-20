const BlogPost = require('./models/BlogPost.js');

module.exports = async (res, res) => {
    const blogposts = await BlogPost.find({});
    res.render('index', { blogposts });
};