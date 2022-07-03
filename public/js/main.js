// import  axios  from '../../node_modules/axios/index'

let addToCart= document.querySelectorAll('.add-to-cart');
const cardCounter = document.getElementById('cartCounter');

function updateCart(pizza){
 // axios  like as ajax 
    axios.post('/update-cart',pizza).then(res=>{
        // console.log(res.data.totalQty);
        cardCounter.innerText = res.data.totalQty;
        Toastify({
            text: "Your pizza Added to cart.",
            className: "info",
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();

    }).catch(e => console.log(` Error of : ${e.response.data}`))
}

addToCart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
       // console.log(e)
        let pizza =JSON.parse( btn.dataset.pizza); //get data attribute value
        updateCart(pizza);
    })
})