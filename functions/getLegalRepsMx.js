axios = require('axios');


const getLegalRepsMx = async (opId) => {
    let requestUrl = process.env.LEGAL_REPS_MX_API;
    let res = await axios
    .post(requestUrl, {'opId': opId})
    return res.data.legalReps
    }


module.exports = getLegalRepsMx;