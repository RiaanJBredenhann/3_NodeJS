const express = require("express");
const path = require("path");
const ejs = require("ejs");
const BlogPost = require('./models/BlogPost');
const app = new express();
// mongoose is a package that allows us to communicate with our database
const mongoose = require("mongoose");

app.use(express.static("public"));
// the next 2 functions enable the app to handle POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// we connect to our database with mongoose.connect
mongoose.connect("mongodb://127.0.0.1/my_database", {useNewUrlParser: true});

// we tell Express to use EJS as our templating engine, that any file
// ending in .ejs should be rendered with the EJS package
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    const blogposts = await BlogPost.find({});
    res.render("index", {
        blogposts
    });
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get('/contact', (req, res) => {
    res.render("contact");
});

app.get('/post/:id', async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id)
    res.render("post", {
        blogpost
    });
});

app.get('/posts/new', (req, res) => {
    res.render('create');
});

// when form is submitted, user will make a POST request.
// with async, we specify that the following method is an asynchronous call
// using await with BlogPost.create(), we are saying that we will await the
// the completion of the current line before the below line can be executed.
app.post('/posts/store', async (req, res) => {
    console.log(req.body);
    await BlogPost.create(req.body)
        .then(blogspot => res.redirect('/'))
        .catch(error => console.log(error))
});

app.listen(3000, () => {
    console.log("App listening on port 3000");
});