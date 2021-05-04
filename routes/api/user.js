const db = require('../../models');
const passport = require('../../config/passport');
const router = require('express').Router();

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.json(req.user);
    req.redirect('/dashboard');
});

router.post('signup', function (req, res) {
    db.User.create({
        username: req.body.username,
        password: req.body.password
    }) 
        .then(function (dbUser) {
            res.redirect(307, '/api/user/login');
        })
        .catch(function (err) {
            res.status(401).json(err);
        });
});

router.get('/logout', function (req, res) {
    req.logout();
    req.session.destroy(function (err) {
        res.json({})
    });
});

module.exports = router;