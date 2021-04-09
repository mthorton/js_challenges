
let house = {
    rooms: [
        {
            name: "bedroom",
            doors: 3,
            windows: 4,
            flooring: "carpet",
            current_occupants: []
        },
        {
            name: "bath",
            doors: 2,
            windows: 0,
            flooring: "tile",
            current_occupants: []
        },
        {
            name: "kitchen",
            doors: 0,
            windows: 2,
            flooring: "hardwood",
            current_occupants: []
        },
    ],
    people: [
        {
            name: "Maxwell",
            age: 28
        },
        {
            name: "Tony",
            age: 8
        }
    
    ]
}

// CHALLENGE 1:
// Get the word bath
console.log(house.rooms[1].name) // bath
console.log(house.rooms.map((room) => room.name)) // bedroom, bath, kitchen

// CHALLENGE 2: 
// add both people into the kitchen. 
house.rooms[2].current_occupants = house.people
house.rooms[2].current_occupants = [...house.rooms.people] // this wouldn't override previous people in the room
console.log(house.rooms[2])
