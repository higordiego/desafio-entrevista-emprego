
require('./app/database/mongoDB')
const Post = require('./app/modules/post/model')

const axios = require('axios')

const url = require('./app/config/url').apiExternal

const options = {
    method: 'GET',
    url: url.urlOne
}
const searchJson = () => axios(options)

const createPostRequest = (object) => object.data.map(value =>
    (value)
        ? Post.create(value)
            .then(post => console.log(post))
            .catch(err => console.log(err))
        : console.log(`Error, não contem dados para url: ${url}`)
)

searchJson()
    .then(createPostRequest)
    .catch((err) => console.log('Error na requisição!', err))
