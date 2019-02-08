import express from 'express';
import guildRoute from './src/modules/guild/guild.routes';
import playerRoute from './src/modules/player/player.routes';
var app = express();
const mocks = require('./src/config/mockFileList');

var fs = require('fs');

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Bem vindo ao Guilded!!')
});

app.use('/', guildRoute);
app.use('/', playerRoute);

// //TODO : SEPARAR AS ROTAS

// //ROTA GUILD
// app.get('/guild/', function (req, res) {
//     res.send(guildModel.getAll());
// });

// app.get('/guild/:id', function (req, res){
//     res.send(guildModel.getById(req.params.id));
// });

// //ROTA PLAYER
// app.get('/players/', (req, res) => {
//     let data = reader.fetchMock(mocks.mocks.mockPlayer);
//     res.send(data);
// });

// app.get('/players/:id', (req, res) => { 

//     let data = reader.fetchMock(mocks.mocks.mockPlayer);
//     let id = Number.parseInt(req.params.id);
//     let result = _.filter(data.players, (item) => item.id === id);

//     res.send(result);
// });


//Launch listening server on port 8082

app.listen(8082, function () {
  console.log('API usando porta 8082!');
  console.log('ROTAS: GUILD e PLAYERS');
})

