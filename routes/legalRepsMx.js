https://script.google.com/macros/s/AKfycbxrK2lEqdnrWczMGuPveu1MNZjSfkSJBz28ylEOabc0n-lxhsSq0SiPo7CZaeSDSTDXGg/exec

var express = require('express');
var router = express.Router();
let getLegalRepsMx = require('../functions/getLegalRepsMx');


router.post('/', async function(req, res) {
    console.log(req.body)
    let token = req.body.token;
    if (token != process.env.API_TOKEN){
      return "error Unauthorized"
    }
    let opId = parseInt(req.body.opId);
    let response = await getLegalRepsMx(opId);
    console.log(response);
    res.send({legalReps: response})
  })
  
  
  module.exports = router;