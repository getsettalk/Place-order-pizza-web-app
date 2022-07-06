require('dotenv').config();
const express = require('express');
const app = express();
const path = require("path")
const expressLayout = require('express-ejs-layouts');
const port = process.env.PORT || 3000;
const connection = require('./app/config/db')

const session = require('express-session');
const flash = require('express-flash');
const MongoStore = require('connect-mongo');
const { urlencoded } = require('express');
const passport = require('passport');

// setting up some static or required method or function
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended : true}));
app.use(express.json());


// session for save in cart
app.use(
    session({
    secret: process.env.COOKIE_KEY,
    resave:false,
    saveUninitialized:false,
    cookie: {maxAge: 1000*60*60*24}, // 24  hours
    store : MongoStore.create({
        mongoUrl: process.env.dbUrl,
        collectionName: 'sessions'
    }) // store session new method
})
);
app.use(flash());
// passport config 
const passportInit = require('./app/config/passport');
passportInit(passport);
app.use(passport.initialize());
app.use(passport.session())
//keep this ^ before down  globel middlewere for send client session data


// globel middlewere for send client session data
app.use((req,res,next)=>{
    res.locals.session= req.session;
    res.locals.user= req.user;
    next();
})


// setting layout and views  
app.use(expressLayout);
app.set('views','views');
app.set('view engine', 'ejs')






// routes requested url send to web.js 
require('./routes/web')(app);

app.listen(port,()=>{
    console.log(`listining at port ${port}`)
})