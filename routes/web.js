const HomeController= require('../app/http/controllers/homeController')
const authController= require('../app/http/controllers/authController')
const cartController= require('../app/http/controllers/customer/cartController')
const orderController= require('../app/http/controllers/customer/orderController')
const AdminOrderController= require('../app/http/controllers/admin/AdminOrderController')
const guest = require('../app/http/middlewares/guest'); // this for validation authentic user can't go if they are login at login or reguster page
const auth = require('../app/http/middlewares/auth'); // this for validation authentic user go in secure page (order, cart)

function initRoutes(app){
    // home or landing page
    app.get("/", HomeController().index)

    // account page or login page
    // all controller has already define in controller folder
    app.get("/ac",guest,authController().login)

    app.post("/ac",authController().postlogin)

    // register page of user  show
    app.get("/register",guest,authController().register)
    // now register new user
    app.post("/register",authController().newUserregister)

    // cart page 
    app.get("/cart",cartController().index)

    app.post('/update-cart',cartController().update)

    // logout 
    app.post("/logout",authController().logout)

    //customer routes
    // orders
    app.post("/orders",auth,orderController().store)
    app.get("/customer/orders",auth,orderController().index)

    //admin
    app.get("/admin/orders",auth,AdminOrderController().index)
}

module.exports = initRoutes;