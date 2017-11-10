module.exports = app => {
    const mongoose = require('mongoose')
    const Post = require('./model')
    const Errors = require('../../errors/post/error')
    const validateId = id => mongoose.Types.ObjectId.isValid.isValid(id)


    return {
        create: (req, res, next) => {
            req.assert('body', Errors.body).notEmpty()
            req.assert('title', Errors.title).notEmpty()
            const error = req.validationErrors()
            error ? res.status(400).json(error) : next()
        },
        validateId: (req, res, next) => validateId(req.params.id) ? next() : res.status(400).json(Errors.idInvalid),
        update: (req, res, next) => {
            if (validateId(req.params.id)) {
                req.assert('body', Errors.body).optional().notEmpty()
                req.assert('title', Errors.title).optional().notEmpty()
                const error = req.validationErrors()
                error ? res.status(400).json(error) : next()
            }
            res.status(400).json(Errors.idInvalid)
        },
        initDatabase: (req, res, next) => {
            Post.count()
                .then(post =>
                    (post > 99)
                        ? res.staus(200).json(Errors.initDatabaseSuccess)
                        : next())
                .catch(() => res.status(500).json(Errors.initDatabase))
        }
    }
}
