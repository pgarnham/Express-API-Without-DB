var express = require('express');
const getPaymentsDocuments = require('../functions/getPaymentsDocuments');
var router = express.Router();


router.post('/', async function(req, res) {
    console.log(req.body)
    let token = req.body.token;
    if (token != process.env.API_TOKEN){
      return "error Unauthorized"
    }
    let response = await getPaymentsDocuments({"documentData": req.body});
    console.log(response);
    res.send({documentUrl: response})
  })
  
  
  module.exports = router;