const axios = require('axios')
const url = require('../../config/url').apiExternal

const options = {
    method: 'GET',
    url: url.urlOne
}
const searchJson = () => axios(options)

module.exports = {
    searchJson
}
