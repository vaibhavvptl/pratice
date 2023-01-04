let person0 = {
    name: 'Alice',
    age: 25,
    currentAddress: 'Glasgow',
    changeAddress: function (newAddress) {
        this.currentAddress = newAddress
    },
    celebrateBirthday: function () {
        this.age = this.age + 1
    },
}
/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

// person.changeAddress('Edinburgh')
// console.log(
//   `Expected result: Edinburgh. Actual result: ${person.currentAddress}`
// )

// person.celebrateBirthday()
// console.log(`Expected result: 26. Actual result: ${person.age}`)

let person = {
    name: 'Alice',
    friends: ['John', 'Nina'],

    makeFriend: function (friend) {
        this.friends = this.friends.concat(friend)
    },
}

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

// person.makeFriend('Bob')

// console.log(
//   `Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`
// )

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

let coffeeMachine = {
    brand: 'Super Coffee',
    prices: {
        cappuccino: 2.4,
        blackCoffee: 1.5,
        flatWhite: 3.0,
    },

    insertedAmount: 0,
    insertMoney: function (amount) {
        this.insertedAmount = amount
    },
    getCoffee: function (coffee) {
        // console.log()
        console.log('coffee prices ' + this.prices[coffee])
        if (this.insertedAmount >= this.prices[coffee])
            return 'please take your coffee'
        else return 'need more money '
    },
}

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

// coffeeMachine.insertMoney(2.4)
// console.log(
//   `Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee(
//     'cappuccino'
//   )}`
// )

// coffeeMachine.insertMoney(1.5)
// console.log(
//   `Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee(
//     'blackCoffee'
//   )}`
// )

// coffeeMachine.insertMoney(4.0)
// console.log(
//   `Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee(
//     'flatWhite'
//   )}`
// )

// coffeeMachine.insertMoney(2.4)
// console.log(
//   `Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee(
//     'flatWhite'
//   )}`
// )
const flowers = {
    tulip: 20,
    rose: 10,
    lily: 15,
}

// for (key in flowers) {
//   console.log(`${key}: ${flowers[key]}`)
// }

// console.log('First action')
// setTimeout(function () {
//   console.log('Second action')
// }, 0)
// console.log('Third action')
function finished() {
    console.log('The task has finished')
}

function thingThatTakesALongTime(callbackFunction) {
    //... Task that takes a long time to complete
    setTimeout(() => {
        console.log('slow')
    }, 1000)

    callbackFunction() // This is where the 'console.log' happens
}

// Pass the function to 'thingThatTakesALongTime' just like a normal variable
// thingThatTakesALongTime(finished)
function myCallbackFunction() {
    console.log('Hello world!')
}
// setTimeout(myCallbackFunction, 1000)

// Inline function
// setTimeout(function () {
//     console.log('Hello world 500!')
// }, 500)

const a = 10
let b = 20
let c = a + b

b = 12

c = a + b

let simpsonsCatchphrases = {
    lisa: 'BAAAAAART!',
    bart: 'Eat My Shorts!',
    marge: 'Mmm~mmmmm',
    homer: "d'oh!",
    maggie: '(Pacifier Suck)',
}

let printValuesOf = (jsObject, keys) => {
    for (let i = 0; i <= keys.length; i++) {
        // console.log(keys[i])
        let key = keys[i]
        console.log(jsObject[key])
    }
}

// printValuesOf(simpsonsCatchphrases, ['lisa', 'bart', 'homer'])

fetch('https://www.randomuser.me/api')
    .then((response) => response.json())
    .then((res) => console.log(res))


