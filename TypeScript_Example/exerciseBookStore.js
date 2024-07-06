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
var books = [
    { title: "The Great Gatsby", genre: "fiction", price: 320 },
    { title: "War and Peace", genre: "fiction", price: 250 },
    { title: "Economics 101", genre: "education", price: 480 },
    { title: "In Cold Blood", genre: "non-fiction", price: 300 },
    { title: "The Catcher in the Rye", genre: "fiction", price: 400 }
];
function filterProductByPrice(products) {
    return products.filter(function (product) { return product.genre === "fiction" && product.price > 300; });
}
function discountProduct(products) {
    return products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
var filterProduct = filterProductByPrice(books);
var discountProducts = discountProduct(filterProduct);
console.log(discountProducts);
