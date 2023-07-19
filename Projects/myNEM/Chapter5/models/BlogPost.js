// models are defined through a Schema interface
// models are objects that represent collections in our database
// a schema represents how a collection looks

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    body: String
});

// we access the database with mongoose.model
// mongoose looks for a collection called BlogPosts to apply the model to
const BlogPost = mongoose.model("BlogPost", BlogPostSchema);
// allows the use of this model in other parts of the project
module.exports = BlogPost;