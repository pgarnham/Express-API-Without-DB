axios = require('axios');


const getLegalRepsMx = async (opId) => {
    let requestUrl = process.env.LEGAL_REPS_MX_API;
    let legalReps
    await axios
    .post(requestUrl, {'opId': opId})
    .then((res) => {console.log("la res desde express uf es: ", res.data);legalReps = res.data.legalReps})
    .catch((err) => console.log(err));
    return legalReps
    }


module.exports = getLegalRepsMx;