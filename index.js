var express = require('express')
var app = express()
const reader = require('./src/playground/reader');

const data = reader.fetchMock();
console.log(data.guilds[0]);

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Bem vindo ao Guilded!!')
});

app.get('/guild/', function (req, res) {
    res.send(data);
});

//Launch listening server on port 8082
app.listen(8082, function () {
  console.log('API usando porta 8082!')
})

