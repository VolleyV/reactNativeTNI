type Product = {
    name : string;
    price : number;
    category : string;
}

// Define array of Product
let products : Product[]=[
    {name:'Laptop',price:50000,category:'Electronics'},
    {name:'Shirt',price:1200,category:'Apparel'},
    {name:'Coffer Maker',price:2500,category:'Appliances'},
]

// Create Function filterProductByPrice for filter product by price
function filterProductByPrice(products:Product[],filter:number):Product[] {
    return products.filter(product=>product.price>filter);


} 

// Create discountProduct for discout 10%
function discountProduct(products:Product[]):Product[] {
    return products.map(product=>({...product,price:product.price*0.9}));


} 
// Call Function
let filterProduct = filterProductByPrice(products,2000);
let discountProducts = discountProduct(filterProduct);

// Show Result
// console.log(filterProduct);
console.log(discountProducts);