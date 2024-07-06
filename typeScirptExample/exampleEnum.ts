//กำหนดัวแปรประเภท Enum
enum OrderStatus{
    Pending = "Pening",
    Shipped = "Shipped",
    Cancelled = "Cancelled"
}
// Create function
function displayOrderStatus(status:OrderStatus){
    switch(status){
        case OrderStatus.Pending :
            console.log("Your order is pending.");
            break;
        case OrderStatus.Shipped :
            console.log("Your order is shipped.");
            break;
        case OrderStatus.Cancelled :
            console.log("Your order is cancelled.");
            break;
        default:
            console.log("Unknown order status.")
    }
}//end of function

//Testing the function
displayOrderStatus(OrderStatus.Shipped);
displayOrderStatus(OrderStatus.Cancelled);