// CHALLENGE 1:
let start = [
    "Justin",
    "Andy",
    "Jenn",
    "Zack",
    "Scott"
]

// console.log a sub array containing only "J" names

// 8/10
let res = start.filter((name) => {
    return name[0] == 'J'
})
console.log(res)

// 5/10 short but hard to think about
console.log(start.filter(name => name[0] === 'J'))

// 3/10
let newArr = []
for (let i = 0; i < start.length; i++){
    if (start[i][0] === 'J'){
        newArr.push(start[i])
    }
}
console.log(newArr)


// CHALLENGE 2:
// Find the average of all the student arrays

let students = [
    {
        name: "Andy",
        grade: 3.0
    },
    {
        name: "Bill",
        grade: 2.8
    },
    {
        name: "Jackie",
        grade: 3.0
    },
    {
        name: "Eli",
        grade: 4.0
    },
    {
        name: "Zach",
        grade: 2.1
    }
]

let total = 0
for (let i = 0; i < students.length; i++){
    total += students[i].grade
}
console.log(total/students.length)


let total = 0
for (let student of students){
    console.log(student.grade)
    total += student.grade
}
let average = total / students.length
console.log(average)

let total = 0
students.forEach(s => total += s.grade)
let average = total / students.length
console.log(average)


console.log(
    students.map(s => s.grade).reduce((gpa, sg) => gpa += sg) /students.length
)


let x = [1, 2, 3]
let res = x.map((x) => x * x)
res.reduce((totalVal, curVal) => {totalVal += curVal}, 0)

let result = [1, 2, 3]
    .map((x) => x * x)
    .reduce((totalVal, curVal) => totalVal += curVal, 0)

console.log(result)