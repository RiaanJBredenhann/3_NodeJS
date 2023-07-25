const User = require('../models/User');
const path = require('path');

module.exports = (req, res) => {
    User.create(req.body)
    .then(res.redirect('/'))
    .catch(error => {
        // we map through the error.errors area keys and for each of them,
        // access the key's error message property
        // we also make the messages available to the view by assigning it to a variable
        const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
        req.session.validationErrors = validationErrors;
        return res.redirect('/auth/register');
    });
}

// module.exports = (req, res) => {
//     User.create(req.body, (error, user) => {
//         if (error) {
//             // we map through the error.errors arraa keys and for each of them,
//             // access the key's error message property
//             // we also make the messages available to the view by assigning it to a variable
//             const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
//             req.session.validationErrors = validationErrors;
//             return res.redirect('/auth/register');
//         }
//         res.redirect('/')
//     })
// }
