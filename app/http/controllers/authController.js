function  authController(){
    return {
        // this is like object send method
        //sending response from here with all type controll and logic
        login(req,res){
            res.render("auth/ac");
        },

        register(req,res){
            res.render("auth/ac");
        }
    }
}
module.exports = authController;