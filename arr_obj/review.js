
let result = [1, 2, 3]
.map((x) => x * x)
.reduce((totalVal, curVal) => totalVal += curVal, 0)

console.log(result)


let sqr = (x) => {
    return x * x 
}

let callBackUser = (cb) => {
    cb()
}

let x = []
console.log(x)


// Our own map function
myMap(console.log, [1, 2, 3])
function myMap(cb, iter){
    for (let item of iter){
        cb(item)
    }
}


// Filter 
function myFilter(cb, iter){
    let retArr = []
    for (let item of iter){
        if(cb(item)){
            retArr.push(item)
        }
    }
    return retArr
}
let filteredArr = myFilter((x) => {
    return x % 2 === 0
}, [1, 2, 3])


// Reduce [1, 2, 3].reduce() => 6 if the cb totaled two numbers

console.log(testArr.reduce((acc, x) => acc + x, 0))

function myReduce(cb, iter){
    total = 0
    for(let item of iter){
        total = cb(total, x)
    }
    return total
}

console.log(myReduce((acc, x) => acc + x, [1, 2, 3]))




