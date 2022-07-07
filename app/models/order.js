const mongoose = require('mongoose');

const orderschema = new mongoose.Schema({
   customerId: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'User',
     required: true
    },
    items : { type: Object, required: true },
    phone: {type: String, required :true},
    address: { type:String, required: true},
    paymentType : {type: String, default: 'COD'},
    status: {type: String, default: 'order_placed'}
},{timestamps: true});

const newOrder =  mongoose.model('Order',orderschema);

module.exports =newOrder;