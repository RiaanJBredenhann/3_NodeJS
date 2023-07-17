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
app.use(express.urlencoded());

// we connect to our database with mongoose.connect
mongoose.connect("mongodb://127.0.0.1/my_database", {useNewUrlParser: true});

// we tell Express to use EJS as our templating engine, that any file
// ending in .ejs should be rendered with the EJS package
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get('/contact', (req, res) => {
    res.render("contact");
});

app.get('/post', (req, res) => {
    res.render("post");
});

app.get('/posts/new', (req, res) => {
    res.render('create');
});

// when form is submitted, user will make a POST request
app.post('/posts/store', (req, res) => {
    console.log(req.body);
    BlogPost.create(
        req.body
    ).then(blogspot => {
        res.redirect('/');
    }).catch(error => {
        console.log(error);
    });
});

app.listen(3000, () => {
    console.log("App listening on port 3000");
});