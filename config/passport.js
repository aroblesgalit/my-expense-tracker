const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');

// Tell passport we want to use a Local Strategy
passport.use(new LocalStrategy(
    function (username, password, done) {
        db.User.findOne({
            username: username
        }).then(user => {
            // If there's no user with the given name
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            } else {
                // Check if the password matches the one stored
                user.validatePassword(password)
                    .then(valid => {
                        // If it's valid, then log them in
                        if (valid) {
                            return done(null, user);
                            // If the password is invalid, then return incorrect message
                        } else {
                            return done(null, false, {
                                message: 'Incorrect password.'
                            });
                        }
                    });
            }
        });
    }
));

// In order to help keep authentiation state across HTTP requests,
// sequelize needs to serialize and deserialize the user
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    db.User.findById(id, function (err, user) {
        done(err, user);
    });
});

// Export our configured passport
module.exports = passport;