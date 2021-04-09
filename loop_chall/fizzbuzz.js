/*
for a range of numbers (1 .. 100):
    if the number is div evenly by:
        3 -> fizz
        5 -> buzz
        3 & 5 -> fizzBuzz
        otherwise -> number



for loop and if statements = Bronze
while loop and switch = Silver
for loop and ternaries = Gold
 
*/

// Bronze
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("fizzBuzz")
    } else if (i % 3 === 0) {
        console.log("fizz")
    } else if (i % 5 === 0){
        console.log("buzz")
    } else {
        console.log(i)
    }
}

for (let i = 1; i <= 100; i++){
    if console.log("fizzBuzz"){
    else if (i % 3 === 0)console.log("fizz")
    }
}   

// Silver
let i = 1
while (i <= 100){
    switch (true){
        case (i % 3 === 0 && i % 5 === 0):
            console.log("fizzBuzz")
            break
        case (i % 3 === 0):
            console.log("fizz")
            break
        case (i % 5 === 0):
            console.log("buzz")
            break
        default:
            console.log(i)
            break
    }
    i++
}

// Gold
for (let i = 1; i <= 100; i++){
    (i % 3 === 0 && i % 5 === 0) ? console.log("fizzBuzz")
    : (i % 3 === 0) ? console.log("fizz")
    : (i % 5 === 0) ? console.log("buzz")
    : console.log(i)
}
