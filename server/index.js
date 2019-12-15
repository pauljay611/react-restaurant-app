const express = require('express');
const csvFilePath = 'public/restaurant.csv'
const csv = require('csvtojson')
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');

app.use(cors());
app.use('/static', express.static('public'));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// GET method route
app.get('/', function (req, res) {
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            console.log(jsonObj);
            res.send(jsonObj);
        })
});


// POST method route
app.post('/restaurants', function (req, res) {
    const keyword = req.body.keyword
    let data = []
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            for (let row of jsonObj) {
                if (row.name.indexOf(keyword) > -1) {
                    data.push(row)
                }
            }
            return data
        }).then(data => {
            res.send(data);
        })
});
const PORT = process.env.PORT || 8080

app.listen(PORT, function () {
    console.log('Example app listening on port 3000!');
});