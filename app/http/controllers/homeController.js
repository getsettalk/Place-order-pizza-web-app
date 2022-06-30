function  HomeController(){
    return {
        // this is like object send method
        index(req,res){
            res.render("customer/index");
        }
    }
}
module.exports = HomeController;