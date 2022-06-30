function initRoutes(app){
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

}

module.exports = initRoutes;