var express = require('express');
var router = express.Router();
let getOpDocuments = require('../functions/getOpDocuments');
let getUnifiedContract = require('../functions/getUnifiedContract');


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


router.post('/', async function(req, res) {
  console.log(req.body)
  let token = req.body.token;
  if (token != process.env.API_TOKEN){
    return "error Unauthorized"
  }
  let response = await getUnifiedContract({"documentData": req.body});
  console.log(response);
  res.send({documentUrl: response})
})

router.post('/', async function(req, res) {
  console.log(req.body)
  let token = req.body.token;
  if (token != process.env.API_TOKEN){
    return "error Unauthorized"
  }
  let opId = parseInt(req.body.op_id);
  let pmAddress = req.body.pm_address;
  let response = await getOpDocuments(opId, pmAddress);
  console.log(response);
  res.send({documentUrl: response})
})


module.exports = router;
