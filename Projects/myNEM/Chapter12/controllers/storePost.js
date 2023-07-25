const BlogPost = require('../models/BlogPost');
const path = require('path');

module.exports = (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..', 'public/img', image.name))
    .then(BlogPost.create({
        title: req.body.title,
        body: req.body.body,
        username: req.body.username,
        image: '/img/' + image.name
    }))
    .then(res.redirect('/'))
    .catch(error => console.log(error));
}

// module.exports = (req, res) => {
//     let image = req.files.image;
//     image.mv(path.resolve(__dirname, '..', 'public/img', image.name), async (error) => {
//         await BlogPost.create({
//             title: req.body.title,
//             body: req.body.body,
//             username: req.body.username,
//             image: '/img/' + image.name
//         });
//         res.redirect('/')
//     });
// }