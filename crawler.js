const cheerio = require('cheerio')
const axios = require('axios')
const url = require('./app/config/url').apiExternal
require('./app/database/mongoDB')

const Post = require('./app/modules/post/model')

const options = {
    method: 'GET',
    url: url.urlTwo
}

const createObject = (data) => {
    Post.create(data)
        .then(response => console.log(response))
        .catch(err => console.log(err))
}

const mineData = createObject => html => {
    let $ = cheerio.load(html.data)
    $('.tileContent').each((i, element) => {
        const mod = {
            id: (i + 1),
            title: $(element).find('.tileHeadline').text().trim(),
            body: $(element).find('.description').text().trim()
        }
        createObject(mod)
    })
}

const searchData = () => axios(options)

searchData()
    .then(mineData(createObject))
    .catch(err => console.log(err))
