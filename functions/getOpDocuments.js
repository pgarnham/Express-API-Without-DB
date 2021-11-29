axios = require('axios');

  const getOpDocuments = async (opDI) => {
    let requestUrl = process.env.GOOGLE_SCRIPT_API + opDI;
    let documentURL
    /*await axios({
        method: 'get',
        url: requestUrl,
        headers: {'Content-Length': 0},
      }).then((response) => {
        return response
      }, (error) => {
        return error
      }
      )*/
      await axios
      .get(requestUrl)
      .then((res) => {documentURL = res.data.documentURL})
      .catch((err) => console.log(err));
    return documentURL
    }
  module.exports = getOpDocuments;