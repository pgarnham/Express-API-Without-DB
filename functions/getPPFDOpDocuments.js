axios = require('axios');


const getOpDocumentsv2 = async (companyData) => {
    let requestUrl = process.env.PP_FD_GOOGLE_SCRIPT_API;
    let documentURL
    await axios
    .post(requestUrl, companyData)
    .then((res) => {console.log("la res desde express uf es: ", res.data);documentURL = res.data.documentUrl})
    .catch((err) => console.log(err));
    return documentURL
    }


module.exports = getOpDocumentsv2;