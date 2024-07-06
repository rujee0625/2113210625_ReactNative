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
//กำหนด array ของสินค้าใช้ชนิดข้อมูล any
var products = [
    { name: "Laptop", price: 50000, category: 'Electronics' },
    { name: "Shirt", price: 1200, category: 'Apparel' },
    { name: "Coffee Maker", price: 2500, category: 'Appliances' },
];
// Create function name is "filterPrductByPrice" สำหรับกรองข้อมูลผลิตภัณฑ์ตามราคาที่กำหนด
function filterPrductByPrice(products, minPrice) {
    return products.filter(function (product) { return product.price > minPrice; });
}
// Create function name is "discountProduct" ใช้สำหรับลดรคาสินค้า 10%
function discountProduct(products) {
    return products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); }); //copy ทุก ๆ แถวของ array
}
//Call function
var filerProduct = filterPrductByPrice(products, 5000);
var discountProducts = discountProduct(filerProduct);
//Testing the function
//console.log(filerProduct);
console.log(discountProducts);
