//กำหนด Enum สำหรับสินค้า
enum ProductStatus
{
    Available = "Available",
    OutOfStock = "Out Of Stock",
    Discontinued = "Discontinued"
}

//กำหนด array ของสินค้าใช้ชนิดข้อมูล any
let products: any[] = 
[
    {name: "Laptop", status: ProductStatus.Available, price: 1200},
    {name: "Smartphone", status: ProductStatus.OutOfStock, price: 700},
    {name: "Tablet", status: ProductStatus.Discontinued, price: 300},
]

// Create function
function displayProductDetail(products: any[])
{
    products.forEach
    (
        product =>
            {
                console.log(`Product:${product.name}, status:${product.status}, price:${product.price}`)
            } 
    );
}   
//Testing the function
displayProductDetail(products);