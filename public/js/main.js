// const axios = require('axios');
let addToCart= document.querySelectorAll('.add-to-cart');
const cardCounter = document.getElementById('cartCounter');
function updateCart(pizza){
 // axios  like as ajax 
    axios.post('/update-cart',pizza).then(res=>{
        console.log(res.data.totalQty);
        cardCounter.innerText = res.data.totalQty;
    }).catch(e => console.log(` Error of : ${e.response.data}`))
}

addToCart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
       // console.log(e)
        let pizza =JSON.parse( btn.dataset.pizza); //get data attribute value
        updateCart(pizza);
    })
})