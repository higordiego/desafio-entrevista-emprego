const axios = require('axios')
const url = require('../../config/url').apiExternal

const options = {
    method: 'GET',
    url: url.urlOne
}

module.exports = {
    searchh: () => axios(options)
}
