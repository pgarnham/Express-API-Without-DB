axios = require('axios');

  const getOpDocuments = async (opDI, pmAddress) => {
    let requestUrl = process.env.GOOGLE_SCRIPT_API + opDI + '&pm_address=' + pmAddress;
    let documentURL
    await axios
    .get(requestUrl)
    .then((res) => {documentURL = res.data.documentURL})
    .catch((err) => console.log(err));
    return documentURL
    }
  module.exports = getOpDocuments;