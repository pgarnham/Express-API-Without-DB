axios = require('axios');


const getLegalRepsMx = async (opId) => {
    let requestUrl = process.env.LEGAL_REPS_MX_API;
    let res = await axios
    .get(requestUrl + '?opId=' + opId)
    console.log('response de google script es: ', res)
    return res.data
    }


module.exports = getLegalRepsMx;