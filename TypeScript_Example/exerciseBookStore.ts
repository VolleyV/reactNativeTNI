interface Book {
    title: string;
    genre: 'fiction'|'non-fiction'|'education';
    price: number;

}

const books:Book[]=[
{title:"The Great Gatsby",genre:"fiction",price:320},
{title:"War and Peace",genre:"fiction",price:250},
{title:"Economics 101",genre:"education",price:480},
{title:"In Cold Blood",genre:"non-fiction",price:300},
{title:"The Catcher in the Rye",genre:"fiction",price:400}

];

function filterProductByPrice(products:Book[]):Book[] {
    return products.filter(product=>product.genre==="fiction"&&product.price>300);

} 


function discountProduct(products:Book[]):Book[] {
    return products.map(product=>({...product,price:product.price*0.9}));

} 

let filterProduct = filterProductByPrice(books);
let discountProducts = discountProduct(filterProduct);

console.log(discountProducts);