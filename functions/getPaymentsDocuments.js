axios = require('axios');

  const getPaymentsDocuments = async (companyData) => {
    let requestUrl = process.env.PAYMENTS_DOCUMENS_API
    let documentURL
    await axios
    .post(requestUrl, companyData)
    .then((res) => {console.log("la res desde express uf es: ", res.data);documentURL = res.data.documentUrl})
    .catch((err) => console.log(err));
    return documentURL
    }
  module.exports = getPaymentsDocuments;