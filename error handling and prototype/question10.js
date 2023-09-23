function pro_func(pro) {
    return function (category) {
       return pro.filter(product => product.category === category)
    }
}



let products = [
    {name: "shirt" , category: "clothing"},
    {name: "pants" , category: "clothing"},
    {name: "hat" , category:"Acessories"},
    {name: "sunglasses" , category: "Acessories"}
]


const filterProductbycategory = pro_func(products)

console.log(filterProductbycategory("clothing"));
