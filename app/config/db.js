require('dotenv').config()
const mongoose = require("mongoose");

   const connection = mongoose.connect(process.env.dbUrl)
   .then(()=>{
       console.log("Db connected success !!!")
   }).catch((e)=>{
       console.log("Falid to connect with db")
   });
   
module.exports = connection;