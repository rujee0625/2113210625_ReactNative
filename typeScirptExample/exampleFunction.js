//create array of Person objects
var people = [
    { name: "John Lee", age: 30 },
    { name: "Mrry Burner", age: 25 },
    { name: "Harry Kill", age: 35 },
];
//Function to filter people who are at least 30 years old
function filterAdults(persons) {
    return persons.filter(function (person) { return person.age >= 30; });
}
//Using the function and logging the result
var adults = filterAdults(people);
console.log(adults);
