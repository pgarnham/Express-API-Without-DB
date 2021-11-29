var express = require('express');
var router = express.Router();
let getOpDocuments = require('../functions/getOpDocuments');


const clients = [
  { name: 'João', age: 20 },
  { name: 'Maria', age: 10 },
  { name: 'José', age: 50 },
  { name: 'Pedro', age: 45 },
  { name: 'Lucas', age: 25 }
];

const client = {
  name: 'Lucas', 
  age: 25
}

router.get('/', async function(req, res) {
  let opId = parseInt(req.query.op_id);
  let token = req.query.token;
  if (token != process.env.API_TOKEN){
    res.send(401)
  }
  let response = await getOpDocuments(opId);
  console.log(response);
  res.send({documentURL: response});
});

router.post('/', function(req, res) {
  res.send(client);
});

router.put('/', function(req, res) {
  res.send(client);
});

router.delete('/', function(req, res) {
  res.send(204);
});

module.exports = router;
