function greet(name) {
    return `Hello ${name}`
}

console.log(greet('Дима'))

// -------------------------------------------

const numbers = [2, 5, 11, 8, 15, 3, 22];

function NumbersGreater(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            console.log(arr[i]);
        }
    }
}

NumbersGreater(numbers);

// ------------------------------------------

function calculation(num1, num2, operation) {
    if (operation === 'plus') {
        result = num1 + num2
        console.log(result)
    } else if (operation === 'minus') {
        result = num1 - num2
        console.log(result)
    } else if (operation === 'multiply') {
        result = num1 * num2
        console.log(result)
    } else if (operation === 'divide') {
        result = num1 / num2
        console.log(result)
    }
}

calculation(10, 5, 'minus')
calculation(10, 5, 'plus')
calculation(10, 5, 'multiply')
calculation(10, 5, 'divide')

// -----------------------------------------

let users = {
    name: 'Dima',
    age: 21,
    isStudent: true,
    isAdmin: false
}

// ----------------------------------------

let user = {
    name: 'Dima',
    age: 21,
    isStudent: true,
    isAdmin : false,
    SayHello(name) {
        return `Hello ${name}`
    }
}

console.log(user.SayHello('Dima'))

// ---------------------------------------

let userss = [
    {
        name: 'Dima',
        age: 21,
        isStudent: true,
        isAdmin: false
    },
    {
        name: 'Anna',
        age: 19,
        isStudent: false,
        isAdmin: true
    },
    {
        name: 'Pasha',
        age: 25,
        isStudent: true,
        isAdmin:true
    }
];

count = 0
for(let i = 0; i < userss.length; i++){
    if (userss[i].isAdmin !== true){
        count++
    }
}

console.log(count)


