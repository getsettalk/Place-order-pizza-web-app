const express = require('express');
const app = express();
const path = require("path")
const expressLayout = require('express-ejs-layouts');
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname,"/public")));
app.use(expressLayout);
app.set('views','views');
app.set('view engine', 'ejs')

// routes 
// home or landing page
app.get("/",(req,res)=>{
    res.render("customer/index");
})

// account page or login page
app.get("/ac",(req,res)=>{
    res.render("auth/ac");
})

// register page of user 
app.get("/register",(req,res)=>{
    res.render("auth/register");
})

// cart page 
app.get("/cart",(req,res)=>{
    res.render("customer/cart");
})

app.listen(port,()=>{
    console.log(`listining at port ${port}`)
})