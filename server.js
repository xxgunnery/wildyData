const express = require('express');
const app = express();
const fs = require('fs')
const papa = require('papaparse')

let playerData = fs.readFileSync('./src/playerdata.csv', "utf-8")
playerData = papa.parse(playerData)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`))

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.json(playerData);
});