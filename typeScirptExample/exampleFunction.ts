interface Person
{
    name:string;
    age:number;
}

//create array of Person objects
const people: Person[] =
[
    {name:"John Lee", age : 30},
    {name:"Mrry Burner", age : 25},
    {name:"Harry Kill", age : 35},
]

//Function to filter people who are at least 30 years old
function filterAdults(persons:Person[]): Person[]
{
    return persons.filter(person=>person.age>=30);
}

//Using the function and logging the result
const adults = filterAdults(people);
console.log(adults);