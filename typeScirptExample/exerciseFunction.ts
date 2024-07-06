//กำหนด Enum สำหรับสินค้า
type Product =
{
    name: string;
    price: number;
    category: string;
};

//กำหนด array ของสินค้าใช้ชนิดข้อมูล any
let products: Product[] = 
[
    {name: "Laptop", price: 50000, category: 'Electronics'},
    {name: "Shirt", price: 1200, category: 'Apparel'},
    {name: "Coffee Maker", price: 2500, category: 'Appliances'},
]

// Create function name is "filterPrductByPrice" สำหรับกรองข้อมูลผลิตภัณฑ์ตามราคาที่กำหนด
function filterPrductByPrice(products: Product[],minPrice:number)
{
    return products.filter(product=>product.price>minPrice);
}   

// Create function name is "discountProduct" ใช้สำหรับลดรคาสินค้า 10%
function discountProduct(products: Product[]):Product[]
{
    return products.map(product=>({...product, price:product.price*0.9})); //copy ทุก ๆ แถวของ array
}

//Call function
let filerProduct = filterPrductByPrice(products,5000);
let discountProducts = discountProduct(filerProduct);

//Testing the function
//console.log(filerProduct);
console.log(discountProducts);