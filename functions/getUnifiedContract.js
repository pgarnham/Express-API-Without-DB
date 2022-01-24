axios = require('axios');

  const getUnifiedContract = async (companyData) => {
    let requestUrl = process.env.UNIFIED_CONTRACT_API
    let documentURL
    await axios
    .post(requestUrl, companyData)
    .then((res) => {console.log("la res desde express uf es: ", res);documentURL = res.data.documentUrl})
    .catch((err) => console.log(err));
    return documentURL
    }
  module.exports = getUnifiedContract;