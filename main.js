


// Fetch Items

fetch('server/items.json')
.then(response =>{
  return response.json();
})
.then(items =>{
  menu(items)
}).catch(error =>{
  console.error("error when fetching", error)
})

function menu(items){

    items.forEach(item => {
      const container = document.createElement('div')
      container.innerHTML = `<div class="item">
              <div class="item-img" style="background-image:url('${item.image}')"></div>
              <div class="item-info">
                  <div id="food">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">R${item.price}</div>
                  </div>
                  <button onclick="less(this)" class="circle">-</button>
                  <input type="text" class="quantity" id="order_quantity" value="1">
                  <button onclick="more(this)" class="circle">+</button>
                  <button class="menu-btn">Add to Cart</button>
              </div>
            </div>`
      let win = document.getElementById("food")
      win.appendChild(container)
    })
    
}