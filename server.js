const express = require('express');
const app = express();
const path = require("path")
const expressLayout = require('express-ejs-layouts');
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname,"/public")))
app.set('views','views');
app.set('view engine', 'ejs')

// routes 
app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(port,()=>{
    console.log(`listining at port ${port}`)
})