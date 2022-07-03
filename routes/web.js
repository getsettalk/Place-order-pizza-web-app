const HomeController= require('../app/http/controllers/homeController')
const authController= require('../app/http/controllers/authController')
const cartController= require('../app/http/controllers/customer/cartController')

function initRoutes(app){
    // home or landing page
    app.get("/", HomeController().index)

    // account page or login page
    // all controller has already define in controller folder
    app.get("/ac",authController().login)

    // register page of user 
    app.get("/register",authController().register)

    // cart page 
    app.get("/cart",cartController().index)

    app.post('/update-cart',cartController().update)

}

module.exports = initRoutes;