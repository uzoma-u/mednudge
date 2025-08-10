
// External modules
require('dotenv').config();
const helmet = require('helmet');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const exphbs = require('express-handlebars');
const handlebars = exphbs.create({
    defaultLayout: 'main',  
    helpers: {}
});
// Local modules, variables
const SECRET = require("config").get("SECRET");
const index = require('./src/modules/index/index-route');
const sequelize = require("./config/db/db-connection")();
// const sequelize = getSequelizeInstance(); // Invoke the function to get the instance
const SequelizeStore = require('connect-session-sequelize')(session.Store);


// Import express
const express = require("express");
// Initialising express app
const app = express();

// Register a view/template engine and its extension
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.set('views', './views');

// Serves static files or assets in public directory
app.use(express.static('public'));
app.use(helmet());


// Middleware parsing JSON
app.use(express.json());
// Bodyparser Middleware
app.use(express.urlencoded( {extended:true}));

const sessionStore = new SequelizeStore({
    db: sequelize,
    tableName: 'sessions',
    checkExpirationInterval: 15 * 60 * 1000, // clean expired every 15 min
    expiration: 24 * 60 * 60 * 1000, // 1 day
});

// Express Session
app.use(session({ 
    secret: SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 86400000, 
        secure: false
    },
  })
);
sessionStore.sync()

// Passport middleware
app.use(passport.initialize());
app.use(passport.session()); //Persist login session

//Flash middleware
app.use(flash());






// Routes
app.use('/', index);










// export app to be used in other files
module.exports = app;

