//กำหนด Enum สำหรับสินค้า
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Available"] = "Available";
    ProductStatus["OutOfStock"] = "Out Of Stock";
    ProductStatus["Discontinued"] = "Discontinued";
})(ProductStatus || (ProductStatus = {}));
//กำหนด array ของสินค้าใช้ชนิดข้อมูล any
var products = [
    { name: "Laptop", status: ProductStatus.Available, price: 1200 },
    { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
    { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];
// Create function
function displayProductDetail(products) {
    products.forEach(function (product) {
        console.log("Product:".concat(product.name, ", status:").concat(product.status, ", price:").concat(product.price));
    });
}
//Testing the function
displayProductDetail(products);
