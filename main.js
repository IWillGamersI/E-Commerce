const items = [
    {
        id:0,
        name: 'Produto 1',
        img:'img/placeholder.jpg',
        amount: 0
    },
    {
        id:1,
        name: 'Produto 2',
        img:'img/placeholder.jpg',
        amount: 0
    },
    {
        id:2,
        name: 'Produto 3',
        img:'img/placeholder.jpg',
        amount: 0
    }
]

bootShoop = () => {
    
    var itemsProduct = document.getElementById('produtos')

    items.map((value) => {
        itemsProduct.innerHTML += `

          <article class='product-single'>  
            <img src='`+value.img+`'/>
            <p>${value.name}</p>
            <button id="add-car" key=${value.id} onClick="updateCar">Adicionar ao Carrinho</button>
            
          </article>

        `
    }) 
     
}



bootShoop()



updateInventory = () => {
    
    var itemsInventory = document.getElementById('inventory')
    
    itemsInventory.innerHTML = "";

    items.map((value) => {
        if(value.amount > 0){
            itemsInventory.innerHTML += `

            <article class="product-single">  
                <p>    ID: ${value.id}</p>
                <p>  Name: ${value.name}</p>
                <p>Amount: ${value.amount}</p>
                <hr>
            </article>

            `
            }
            
    })
    
}

var eachItems = document.getElementById('add-car')

eachItems.addEventListener('click',updateCar)

function updateCar (){
    for(var i = 0; i < eachItems.length; i++){
        if(eachItems[i] == items.id){
            let key = this.getAttribute('key')
            items[key].amount++
        }
         
    }
}









console.log(items)
console.log(eachItems)
