const items = [
    {
        id:1,
        nome: 'Produto 1',
        img:'img/placeholder.jpg',
        quantidade: 0
    },
    {
        id:2,
        nome: 'Produto 2',
        img:'img/placeholder.jpg',
        quantidade: 0
    },
    {
        id:3,
        nome: 'Produto 3',
        img:'img/placeholder.jpg',
        quantidade: 0
    }
]

bootShoop = () => {

    var itemsProduct = document.querySelector('#produtos')

    items.map((value) =>{
        console.log(value.nome)
    })

}

bootShoop()