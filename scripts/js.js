// data models
let model = [ // this is a JavaScript array of Objects
    {item:'Pot', price:3.99}, 
    {item:'Dot', price:2.99}, 
    {item:'Hot', price:9.99}
]
// explore JSON tools
let j = JSON.stringify(model) // converts anything to JSON (which is text)
console.log(j, typeof(j))
let o = JSON.parse(j) // convert JSON back into a JavaScript structure
console.log(o, typeof(o))

// looping over data
let shopItems = ''
for (i=0; i<model.length; i++){
    shopItems+= `${model[i]['item']} &pound;${model[i]['price']}`
    shopItems += '<br/>'
}
console.log(shopItems)
shop.innerHTML = shopItems




// event call-back functions
const handleButton = () => {
    // prevent the form from submitting!!
    event.preventDefault()
    // validate

    // grab the user-values for category and num
    let c = category.value
    let n = num.value // same as n=document.getElementById('num').value
    let apiUrl = 'https://jsonplaceholder.typicode.com/'
    let l = `${apiUrl}${c}/${n}` // join the text together
    // or l = `https://jsonplaceholder.typicode.com/${category.value}/${num.value}`

    // use these values to make an http request for data
    fetch(l) // defaults to a GET request (asynchronous)
        // .then((response) => {return response.json()}) /alternative long-hand syntax
        .then(response => response.json()) // grab the JSON bit of the response
        // alternatively .text or .xml or .html instead of .json
        .then(data => console.log(data));
}
// event bindings
btnGetData.addEventListener('click', handleButton)