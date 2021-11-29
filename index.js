const express = require('express');
const opsDocuments = require('./routes/opsDocuments');

const app = express();

app.use(express.json());

app.use('/op-documents', opsDocuments);

app.listen(3000);
