const { json } = require("express");
function  cartController(){
    return {
        // this is like object send method
        //sending response from here with all type controll and logic
        index(req,res){
           return res.render("customer/cart");
        },
        update(req,res){
            // for the first time creating cart (Adding basic structure)
            if(!req.session.cart){
                req.session.cart={
                  
                    items:{},
                    totalQty:0,
                    totalPrice:0
                }
               
            }
            let cart = req.session.cart
            //check if time does not exist in cart
            if(!cart.items[req.body._id]){
               cart.items[req.body._id]= {
                item:req.body,
                qty:1
               } 
               cart.totalQty = cart.totalQty +1
               cart.totalPrice =  cart.totalPrice + req.body.price
            } else{
                cart.items[req.body._id].qty = cart.items[req.body._id].qty +1;
                cart.totalQty=  cart.totalQty +1;
                cart.totalPrice = cart.totalPrice + req.body.price;
            }
            // console.log(req.body)
            return res.json({ totalQty : req.session.cart.totalQty})
            
        }
    }
}
module.exports = cartController;