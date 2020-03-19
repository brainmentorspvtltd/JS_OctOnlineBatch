// var name = "Anna"

var person = {
    name : "Ram",
    age : 30,
    greet() {
        console.log("Hi, I am " + this.name)
    }
};

person.greet()

const printName = ({name}) =>  console.log(name)

printName(person);

const {name, age} = person;
console.log(name + " is " + age + " years old")

const copiedPerson = {...person}
console.log(copiedPerson)

const hobbies = ["Sports", "Cooking"]
hobbies.push("Programming")

for (let hobby of hobbies){
    console.log(hobby);
}

const copiedArray = [...hobbies]
console.log(copiedArray)

console.log(hobbies.map(hobby => "Hobby : " + hobby))
console.log(hobbies)

// hobbies = copiedArray

const add = (a,b) => a + b;

const addOne = a => a + 1;

const addRandom = () => 1 + 2;

console.log(add(1,2))
console.log(addOne(1));
console.log(addRandom());

const toArray = (...args) => args;

console.log(toArray(1,2,3,4,5));

console.log("After destructuring the array : ")
const [hobby1, hobby2] = hobbies
console.log(hobby1)
console.log(hobby2)
// console.log(hobby3)