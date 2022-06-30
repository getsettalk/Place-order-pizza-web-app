const express = require('express');
const app = express();
const path = require("path")
const expressLayout = require('express-ejs-layouts');
const port = process.env.PORT || 3000;

// setting up some static or required method or function
app.use(express.static(path.join(__dirname,"/public")));
app.use(expressLayout);
app.set('views','views');
app.set('view engine', 'ejs')


// routes requested url send to web.js 
require('./routes/web')(app);

app.listen(port,()=>{
    console.log(`listining at port ${port}`)
})