const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://127.0.0.1/my_database', {useNewUrlParser: true});

BlogPost.create({
    title: "The Mythbuster's Guide to Saving Money on Energy Bills",
    body: "If you have been here a long time, you might remember when I " +
          "went on ITV Tonight to dispense a masterclass in saving money on energy " +
          "bills. Energy-saving is one of my favourite money topics, because once " +
          "you get past the boring bullet-point lists, a whole new world of thrifty " +
          "nerdery opens up. You know those bullet-point lists. You start spotting " +
          "them everything at this time of year. They go like this:",
    username: "Riaan Bredenhann"
}).then(blogspot => {
    console.log(blogspot);
}).catch(error => {
    console.log(error);
});

// we can find by full title
BlogPost.find({
    title: "The Mythbuster's Guide to Saving Money on Energy Bills"
}).then(blogspot => {
    console.log("Found a Blogpost by the full title");
    console.log(blogspot);
}).catch(error => {
    console.log("Could not find a Blogpost by the full title");
    console.log(error);
});

// we can find by a single word
BlogPost.find({
    title: /The/
}).then(blogspot => {
    console.log("Found a Blogpost by a single word");
    console.log(blogspot);
}).catch(error => {
    console.log("Could not find a Blogpost by a single word");
    console.log(error);
});

// we can find by ID
var id = "5cb436980b33147489eadfbb";
BlogPost.findById(
    id
).then(blogspot => {
    console.log("Found a Blogpost by it's ID");
    console.log(blogspot);
}).catch(error => {
    console.log("Could not find a Blogpost by it's ID");
    console.log(error);
});

// we can update the document
BlogPost.findByIdAndUpdate(id, {
    title: "Updated Title"
}).then(blogspot => {
    console.log("Updated a Blogpost");
    console.log(blogspot);
}).catch(error => {
    console.log("Could not update a Blogpost");
    console.log(error);
});

// find the updated document
BlogPost.find({
    title: "Updated Title"
}).then(blogspot => {
    console.log("Found an updated Blogpost");
    console.log(blogspot);
}).catch(error => {
    console.log("could not find an updated Blogpost");
    console.log(error);
});

// we can delete a document
BlogPost.findByIdAndDelete(
    id
).then(blogspot => {
    console.log("Deleted a Blogpost");
    console.log(blogspot);
}).catch(error => {
    console.log("Could not delete a Blogpost");
    console.log(error);
});

// try to find deleted document
BlogPost.find({
    title: "Updated Title"
}).then(blogspot => {
    console.log("Found a deleted Blogpost");
    console.log(blogspot);
}).catch(error => {
    console.log("Could not find a deleted Blogpost");
    console.log(error);
});