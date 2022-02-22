var express = require('express');
var router = express.Router();
let getOpDocumentsv2 = require('./../functions/getPPFDOpDocuments')


router.post('/', async function(req, res) {
    console.log(req.body)
    let token = req.body.token;
    if (token != process.env.API_TOKEN){
      return "error Unauthorized"
    }
    let opId = parseInt(req.body.op_id);
    let pmAddress = req.body.pmAddress;
    let contractDate = req.body.contractDate
    let companyData = {
        'opId': opId,
        'pmAddress': pmAddress,
        'contractDate': contractDate
    }
    let response = await getOpDocumentsv2(companyData);
    console.log(response);
    res.send({documentUrl: response})
  })
  
  
  module.exports = router;