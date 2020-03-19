// console.log('Hello from Node.js');

// const fs = require('fs');

// fs.writeFileSync('hello.txt', 'Hello from Node.js'); 

var name = "Ram";
var age = 29;
var hasHobbies = true;
//undefined
//null

var person = {
    name : "Ram",
    age : 28,
    hobbies : ["Sports", "Cooking"]
}

var copiedPerson = {...person}
copiedPerson["hobbies"] = [...person["hobbies"]]
copiedPerson["hobbies"].push("Music")
console.log(person)
console.log(copiedPerson)

var human = {name : "Ram"}
//human is containing the complete object {name : "Ram"}
//pointer to that object is stored 
//a pointer to the name property

//Object.assign() method

// var copiedHuman = Object.assign({}, human)
// copiedHuman.name = "Anna"
// console.log(human)  //what does this line print?
// console.log(copiedHuman)

var copiedHuman = {...human}
copiedHuman.name = "Anna"
console.log(human)
console.log(copiedHuman)

//slice() method

// var hobbies = ['Sports', 'Cooking'];
// var copiedHobbies = hobbies.slice()
// copiedHobbies.push("Music")
// console.log(hobbies)
// console.log(copiedHobbies)

//spread operator

var hobbies = ["Sports", "Cooking"]
var copiedHobbies = [...hobbies]
copiedHobbies.push("Music")
console.log(hobbies)
console.log(copiedHobbies)

// var copiedHobbies = hobbies;
// copiedHobbies.push("Music")
// console.log(hobbies[2])  //what does this line print?

function summarizeUser(userName, userAge, userHasHobby){
    return (
        'Name is ' + userName +
        ', age is ' + userAge +
        ', and the user has hobbies : ' + userHasHobby
    );
}

// console.log(summarizeUser(name, age, hasHobbies))

// var button = document.querySelector("button");
// button.addEventListener('click', this.addItem.bind(this))
// button.addEventListener('click', this.addItem())

function someFunction(){
    // do something here...
}
// someFunction()
// const  button = document.querySelector("button");
// button.addEventListener("click", someFunction);

class MyClass{
    constructor(){
        // const button;
        // button.addEventListener('click', this.myMethod)
        // this.myMethod()
    }
    myMethod(){
        //do something here
    }
}

new MyClass() //this will trigger the constructor and hence call myMethod()

class NameField{

}

class NameGenerator{
    constructor(){
        const btn = document.querySelector("button")
        this.names = ["Ram", "Manu", "Anna"]
        this.currentName = 0
        btn.addEventListener("click", this.addName.bind(this))
        console.log("inside constructor...")
        console.log("this is ", this)
    }
    addName(){
        console.log("inside addName()")
        console.log("this now is ", this)
        const name = new NameField(this.names[this.currentName])
        this.currentName++;
        if(this.currentName >= this.names.length){
            this.currentName = 0;
        }
    }
}

new NameGenerator()