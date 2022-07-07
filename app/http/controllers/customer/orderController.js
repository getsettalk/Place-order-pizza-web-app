const newOrder = require('../../../models/order');
const moment = require('moment');
function orderController(){
    // this is factory function so return 
    return{

        store(req,res){
           // validate requiest 
           const { phone, address } = req.body;
           if(!phone || !address){
            req.flash('error','Order Delievery Details should be filled.')
            return res.redirect('/cart')
           }

           // store in db
           const order = new newOrder({
            customerId: req.user._id,
            items: req.session.cart.items,
            phone,
            address
           })

           order.save().then(result =>{
            req.flash('success','order placed successfully')
            delete req.session.cart; // delete cart items 
            return res.redirect('/customer/orders')
           }).catch(err=>{
            req.flash('error','Something went wrong')
            return res.redirect('/cart')
           })
        },
       async index(req,res){
            const orders = await newOrder.find({customerId: req.user._id},null,
                {sort: {'createdAt':-1}}); // here we also sorting data in decending order for (-1)
            // console.log(orders)
            res.render('customer/orders',{orders:orders,moment:moment})
        }
    }
}

module.exports = orderController;