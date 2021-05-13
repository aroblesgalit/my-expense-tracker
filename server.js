const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const session = require('express-session');
const passport = require('./config/passport');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.use(cors());

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/build')));
}

// User sessions to keep track of user's login status
app.use(session({ secret: 'expense', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Add routes
app.use(routes);

// Connect to MongoDB
mongoose.connect(process.env.DB_URI || 'mongodb://localhost/expense', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});