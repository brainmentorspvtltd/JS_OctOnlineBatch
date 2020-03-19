// const fetchData = callback => {
//     setTimeout(() => {
//         callback("Done!")
//     }, 1500)
// }

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!")
        }, 1)
    })
    return promise;
}

setTimeout(() => {
    console.log("Timer is done!")
    // fetchData(text => {
    //     console.log(text)
    // })
    fetchData().then(text => {
        console.log(text)
        return fetchData();
    }).then(text2 => {
        console.log(text2)
    })
}, 1);

console.log("Hello")
console.log("Hello again..")
const name = "Ram"
const age = 30;
console.log("My name is " + name + " and I am " + age + " years old.")
console.log(`My name is ${name} and I am ${age} years old.`)  //template literals