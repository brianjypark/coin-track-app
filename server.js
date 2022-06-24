const express = require('express')
const app = express()
const port = 8383

// TODO change to actual api call: mock coin data pulled from API
const coinMock = require('./coinData.json')

const url = "https://api.alternative.me/v2/ticker/?limit=10"

// HEADER (FAV, RANK, NAME, SYMBOL, PRICE)
const header = ["", "Rank", "Name", "Symbol", "Price $"]


app.use(express.static('public'))
// routes HTTP verbs
app.post('/', (req, res) => {
    res.status(200).send('hi')
})
app.get('/api', (req, res) => {
    res.status(200).send(parseCoinData(coinMock)) // TODO change to api later
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))


async function fetchCoin(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP status error. STATUS: ${response.status}`);
    }
    const data = await response.json();
    parseCoinData(data);
}

function parseCoinData(object) {
    const coinarray = [];
    testData = object.data;

    for(coinid in testData) {
        const arr = [];
        arr.push(testData[coinid].rank, testData[coinid].name, testData[coinid].symbol, testData[coinid].quotes['USD'].price);
        coinarray.push(arr);
    }
    const JSONobj = { "headers": header, "rows": coinarray }
    // return JSON.stringify(JSONobj)
    return JSONobj
}

// fetchCoin(url)
parseCoinData(coinMock)


