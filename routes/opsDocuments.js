var express = require('express');
var router = express.Router();
let getOpDocuments = require('../functions/getOpDocuments');


router.get('/', async function(req, res) {
  let opId = parseInt(req.query.op_id);
  let token = req.query.token;
  let pmAddress = req.query.pm_address;
  if (token != process.env.API_TOKEN){
    return "error Unauthorized"
  }
  let response = await getOpDocuments(opId, pmAddress);
  console.log(response);
  res.send({documentURL: response});
});


module.exports = router;
