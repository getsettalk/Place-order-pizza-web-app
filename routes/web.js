const HomeController= require('../app/http/controllers/homeController')
const authController= require('../app/http/controllers/authController')

function initRoutes(app){
    // home or landing page
app.get("/", HomeController().index)

// account page or login page
// all controller has already define in controller folder
app.get("/ac",authController().login)

// register page of user 
app.get("/register",authController().register)

// cart page 
app.get("/cart",(req,res)=>{
    res.render("customer/cart");
})

}

module.exports = initRoutes;