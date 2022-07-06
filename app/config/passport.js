const LocalStrategy= require('passport-local').Strategy
const newUser = require('../models/user');
const bcrypt = require('bcrypt');
function init(passport){
passport.use(new LocalStrategy({usernameField :'email'}, async (email,password,done)=>{
    // login

    // check if email exists
   const user = await newUser.findOne({email:email});
   if(!user){
    return done(null,false,{message:'No user with this Email'});
   }
   bcrypt.compare(password,user.password).then(match=>{
    if(match){
        return done(null,user,{message:'Logged in success'})
    }
    return done(null,false,{message:' Wrong Credintials ,failed... to login'})
   }).catch(err=>{
    return done(null,false,{message:' Something wrong...'})
   })

}))

    passport.serializeUser((user,done)=>{
        done(null,user._id); // storing user id in session
    })

    passport.deserializeUser((id,done)=>{
        newUser.findById(id,(err,data)=>{
            done(err,data)
        })
    })


}

module.exports = init;