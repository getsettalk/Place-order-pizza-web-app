const menu = require('../../models/menu');

function  HomeController(){
    return {
        // this is like object send method
      async  index(req,res){
                const pizzas = await menu.find();
                // console.log( await menu.find().count())
                return res.render("customer/index",{pizzas:pizzas});
         
        }
    }
}
module.exports = HomeController;