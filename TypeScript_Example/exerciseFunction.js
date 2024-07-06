var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Define array of Product
var products = [
    { name: 'Laptop', price: 50000, category: 'Electronics' },
    { name: 'Shirt', price: 1200, category: 'Apparel' },
    { name: 'Coffer Maker', price: 2500, category: 'Appliances' },
];
// Create Function filterProductByPrice for filter product by price
function filterProductByPrice(products, filter) {
    return products.filter(function (product) { return product.price > filter; });
}
// Create discountProduct for discout 10%
function discountProduct(products) {
    return products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
// Call Function
var filterProduct = filterProductByPrice(products, 2000);
var discountProducts = discountProduct(filterProduct);
// Show Result
// console.log(filterProduct);
console.log(discountProducts);
