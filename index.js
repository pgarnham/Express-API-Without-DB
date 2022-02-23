const express = require('express');
const opsDocuments = require('./routes/opsDocuments');
const paymentsDocuments = require('./routes/paymentsDocuments');
const earlyPaymentDirectFinancing = require('./routes/pp-fd-mx');
const legalRepsMx = require('./routes/legalRepsMx');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        " x-client-secret, Authorization, Origin, X-Requested-With, Content-Type"
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
  });

app.use(express.json());

app.use('/op-documents', opsDocuments);
app.use('/payments-documents', paymentsDocuments)
app.use('/pp-fd-mx', earlyPaymentDirectFinancing)
app.use('/legal-reps-mx', legalRepsMx)

app.listen(process.env.PORT || 5000)
