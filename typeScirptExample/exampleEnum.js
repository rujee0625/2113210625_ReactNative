//กำหนดัวแปรประเภท Enum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pening";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
// Create function
function displayOrderStatus(status) {
    switch (status) {
        case OrderStatus.Pending:
            console.log("Your order is pending.");
            break;
        case OrderStatus.Shipped:
            console.log("Your order is shipped.");
            break;
        case OrderStatus.Cancelled:
            console.log("Your order is cancelled.");
            break;
        default:
            console.log("Unknown order status.");
    }
} //end of function
//Testing the function
displayOrderStatus(OrderStatus.Shipped);
displayOrderStatus(OrderStatus.Cancelled);
