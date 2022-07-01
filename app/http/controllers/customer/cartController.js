function  cartController(){
    return {
        // this is like object send method
        //sending response from here with all type controll and logic
        index(req,res){
            res.render("customer/cart");
        }
    }
}
module.exports = cartController;