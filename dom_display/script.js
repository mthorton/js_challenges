
const baseURL = 'https://ghibliapi.herokuapp.com/films/'

const getFilms = () => {
    console.log("working")

    // let rest = await fetch (baseURL)
    // let json = await rest.json()
    // console.log(json)

    fetch(baseURL)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        //displayResults(json)
        let filmArr = json.map(film => {
            return{
                title: film.title,
                director: film.director,
                description: film.description
            }
        })
       // filmArr.sort((cur, prev) => prev.title - cur.title)
       displayFilms(filmArr)
    })
}

const displayFilms = (films) => {
    // This is grabbing the container
    const wrapper = document.getElementById("results")
    // Will do the code block for each object
    for (let film of films){
        let card = document.createElement("div")
        let card_header = document.createElement("div")
        let card_body = document.createElement("div")
    
        card.className = "card"
        card_header.className = "card-header"
        card_body.className = "card-body"
        card_header.innerText = `Title: ${film.title}, Director: ${film.director}`
        card_body.innerText = film.description
    
        // Adding the inner divs to the card
        card.appendChild(card_header)
        card.appendChild(card_body)
        // Adding a card to the container / wrapper
        wrapper.appendChild(card)
    }
    }

    

// function displayResults(films){
//     let filmList = document.getElementById("film-list")
//     films.map(film => {
//         let filmLi = document.createElement('li')
//         filmLi.innerText = `Title: ${film.title}, Director: ${film.director}`
//         filmList.appendChild(filmLi)
//     })
// }

let button2 = document.getElementById("secondButton")
button2.addEventListener("click", getFilms)

// const displayFilms = () => {
//     const ul = document.getElementById("film-list")

//     films.map((film) => {
//         let li = document.createElement('li')
//         li.innerText = `${film.title} ${film.director}`
//         ul.appendChild(li)
//     })
// }
    
    

let button3 = document.getElementById("thirdButton")
button3.onclick = getFilms