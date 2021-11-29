axios = require('axios');

  const getOpDocuments = async (opDI) => {
    let requestUrl = 'https://script.google.com/macros/s/AKfycbwC-91PwmAD0gcy_WSfNmPSTV8Q06kDKzmAjMbSHXypGkKxRUKMgXP0hT997k0GTyg/exec?op_id=' + opDI;
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