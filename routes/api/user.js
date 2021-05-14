const db = require('../../models');
const passport = require('../../config/passport');
const router = require('express').Router();

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json(req.user);
    // res.redirect('/expenses');
});

router.post('/signup', (req, res) => {
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

router.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy(function (err) {
        res.json({})
    });
});

router.get('/user_data', (req, res) => {
    if (!req.user) {
        res.status(401).json({});
    } else {
        res.json({
            id: req.user._id,
            username: req.user.username
        })
        // db.User
        //     .findOne({ username: req.user.username })
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err));
    }
});

module.exports = router;