const User = require('../models/User');

// we look for a logged in user
// if it doesn't exist or the user is not logged in, render the home page

module.exports = (req, res, next) => {
    User.findById(req.session.userId)
    .then(user => {
        if (error || !user) {
            return res.redirect('/');
        }
        next()
    })
    .catch(error => {
        console.log(error);
        next();
    });
}

// module.exports = (req, res, next) => {
//     User.findById(req.session.userId, (error, user) => {
//         if (error || !user) {
//             return res.redirect('/');
//         }
//         next();
//     });
// }