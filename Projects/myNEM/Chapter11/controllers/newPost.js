module.exports = (req, res) => {
    // checks if a user is logged in before rendering the create post page
    if (req.session.userID) {
        return res.render('create');
    }
    res.redirect('auth/login');
};