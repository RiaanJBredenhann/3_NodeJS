const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username: username})
    .then(user => {
        bcrypt.compare(password, user.password, (error, same) => {
            if (same) {
                res.redirect('/');
            } else {
                res.redirect('/auth/login');
            }
        })
    }).catch(error => {
        console.log(error);
        res.redirect('/auth/login');
    });
}