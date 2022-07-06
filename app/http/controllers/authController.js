const newUser = require('../../models/user');
 const bcrypt = require('bcrypt');
const passport = require('passport')
function  authController(){
    return {
        // this is like object send method
        //sending response from here with all type controll and logic
        login(req,res){
            res.render("auth/ac");
        },
        postlogin(req,res,next){
            const {email,password}=  req.body;
            if(!email || !password) {
                req.flash('error','All fields are Required.')
             
                 return res.redirect('/ac')
            }
            passport.authenticate('local',(err,user,info)=>{
                if(err){
                    req.flash('error',info.message)
                    return next(err);
                }
                if(!user){
                    req.flash('error',info.message)
                    return res.redirect('/ac')
                }
                req.logIn(user,(err)=>{
                    if(err){
                        req.flash('error',info.message)
                        return next(err);
                    }
                    return res.redirect('/')
                })

           })(req,res,next)
            // res.render("auth/ac");
        },

        register(req,res){
            res.render("auth/register");
        },
       async newUserregister(req,res){
           
            const {Uname,email,password}=  req.body; // getting data as array distructing
            if(!req.body.Uname.trim().length == 0  && !req.body.email.trim().length ==0 && !req.body.password.trim().length ==0){
              
                // check email exist or not 
                newUser.exists({email:email},async (err,result)=>{
                    if(result){
                        // console.log(result)
                        req.flash('error','This Email Already exists')
                        req.flash('Uname',Uname)
                        req.flash('email',email)
                         return res.redirect('/register')
                    }else{
                            // create new user in data base
                const encPass = await bcrypt.hash(password,10)
                const user = new newUser({
                    Uname: Uname,
                    email : email,
                    password: encPass
                })
                user.save().then((user)=>{
                    // console.log(user)
                    req.flash('success','Your registraion has been done, login now !')
                    return res.redirect('/ac')
                }).catch(err =>{
                    req.flash('error','something went wrong')
                    return res.redirect('/register')
                })
                    }
                })
            
            }else{
                req.flash('error','All fields are required')
                req.flash('Uname',Uname)
                req.flash('email',email)
                
               return res.redirect('/register')
            }
           
        },
        // logout 
        logout(req,res,next){
            req.logout(function(err) {
                if (err) { return next(err); }
                res.redirect('/');
              });
        }
    }
}
module.exports = authController;