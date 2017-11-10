module.exports = app => {
    const Service = require('./service')
    const Business = require('./business')
    const Post = require('./model')
    const Persistence = require('../../helpers/persistence')
    return {
        create: (req, res) => {
            const mod = req.body
            Persistence.create(Post, res)(mod)
        },
        update: (req, res) => {
            const query = req.params
            const mod = req.body
            Persistence.update(Post, res)(query, mod)
        },
        listOne: (req, res) => {
            const query = req.params
            const mod = {}
            Persistence.findOne(Post, res)(query, mod)
        },
        listAll: (req, res) => {
            const query = {}
            const mod = {}
            Persistence.findAll(Post, res)(query, mod)
        },
        delete: (req, res) => {
            const query = req.params
            const mod = {}
            Persistence.remove(Post, res)(query, mod)
        },
        initDatabase: (req, res) => {
            Service.searchJson()
                .then(response => {
                    Business.createPostRequest(response.data)
                    res.status(200).json(response.data)
                })
                .catch(err => res.status(400).json(err))
        }
    }
}
