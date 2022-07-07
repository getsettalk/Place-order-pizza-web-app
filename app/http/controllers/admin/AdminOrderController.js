const newOrder = require('../../../models/order');
const { populate } = require('../../../models/user');
function AdminOrderController(){
    return {
        index(req,res){
            newOrder.find({status: {$ne: 'completed'}},null,{sort: {'createdAt':-1}});        
        populate('customerId','-password').exec((err,orders)=>{
            if(req.xhr){
                return res.json(orders)
            }else{
            res.render('/admin/orders'); // i don't want fetch password so added minhus symbole
                
            }
        })
        }
    }
}
module.exports = AdminOrderController;