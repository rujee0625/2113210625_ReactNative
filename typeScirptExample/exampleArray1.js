//สร้างและเข้าถึง Array
var numbers = [10, 20, 30, 40, 50];
console.log(numbers[2]); //30
//การใช้งาน loop ร่วมกับ array
var names = ['Alice', 'Bob', 'Charlie'];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
//การเพิ่มขและลบข้อมูลใน array(push,pop)
var fruit = ["Apple", "Banana"];
fruit.push("Cherry");
console.log(fruit);
