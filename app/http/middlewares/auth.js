function auth (req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/ac') ; // to login page
}
module.exports = auth;