// this module includes a routes object that hold key-value pairs mapped to
// GET and POST requests through their respective functions

// the handle function is a callback function to createServer in main.js

// the get and post functions take a URL and callback function and then
// map them to each other in the routes object

const httpStatus = require("http-status-codes"),
    contentTypes = require("./contentTypes"),
    utils = require("./utils");

const routes = {
    "GET": {},
    "POST": {}
};

exports.handle = (req, res) => {
    try {
        routes[req.method][req.url](req, res);
    } catch (e) {
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/error.html", res);
    }
};

exports.get = (url, action) => {
    routes["GET"][url] = action;
};

exports.post = (url, action) => {
    routes["POST"][url] = action;
};