const Post = require('./model')

const createPostRequest = (object) => object.map((value, index) => {
    Post.create(object)
        .then(post => console.log(post))
        .catch(err => console.log(err))
})

module.exports = {
    createPostRequest
}
