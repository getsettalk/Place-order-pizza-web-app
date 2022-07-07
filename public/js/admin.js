function initAdmin(){
    const orderTableBody = document.querySelector('#orderTableBody')
    let orders =[];
    let markup 
    axios.get('/admin/orders',{
        headers:{
            "X-Requested-With": "XMLHttpRequest"
        }
    }).then(res=>{
        orders = res.data;
        markup = generateMarkup(orders);
        orderTableBody.innerHTML= markup;
    }).catch(e=>{
        console.log(e)
    })

        // function 
        function renderItems(items){
            let parsedItem = Object.values(items)
            return parsedItem.map((menuItem)=>{
                return `
                <p> ${menuItem.item.name} -  ${menuItem.qty} pcs </p>
                `
            }).join('')
        }

    function generateMarkup(orders){
        return orders.map(order=>{
            return `
                <tr>
                <td>
                    <p>${order._id} </p>
                    <div>${renderItems(order.items)} </div>
                </td>
                <td>${order.customerId.name} </td>
                <td>${order.address} </td>
                <td> 
                    <form  action="/admin/order/staus" method="post">
                    <input type="hidden" name="orderId" value="${order._id} ">
                    <select name="status" onchange="this.form.submit()" class="form-control" >
                        <option value="order_placed" ${order.status === 'order_placed' ? 'selected' :''} >Placed </option>
                        <option value="confirmed" ${order.status === 'confirmed' ? 'selected' :''} >confirmed </option>
                        <option value="prepared" ${order.status === 'prepared' ? 'selected' :''} >prepared </option>
                        <option value="delivered" ${order.status === 'delivered' ? 'selected' :''} >delivered </option>
                        <option value="completed" ${order.status === 'completed' ? 'selected' :''} >completed </option>
                    </select>
                    </form>
                </td>
              <td>
              ${moment(order.createdAt).format('hh:mm A')}
              </td>
                </tr>    
            `
        }).join('')
    }
}

export default initAdmin;