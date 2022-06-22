const express = require('express')
const app = express()
const port = 8383

app.use(express.static('public'))
// routes HTTP verbs
app.post('/', (req, res) => {
    res.status(200).send('hi')
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))

let url = "https://api.alternative.me/v2/ticker/?limit=10"


async function fetchCoin(url) {
    // const response = await fetch(url);
    // const coins = await response.json();
    // return coins;
    await fetch(url)
    .then(res => res.json())
    .then((json) => {
        console.log(json)
    })
}

// fetchCoin().then(coin => {
//     console.log(coin)
// })
fetchCoin(url)