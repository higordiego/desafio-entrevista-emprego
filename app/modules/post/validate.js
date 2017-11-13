module.exports = app => {
    const Errors = require('../../errors/post/error')
    const Validate = require('../../helpers/validate')

    return {
        create: (req, res, next) => {
            const required = ['body', 'title', 'id']
            const error = Validate.requestRequired(req, required, Errors)
            error ? res.status(400).json(error) : next()
        },
        validateId: (req, res, next) => Validate.isId(req.params._id) ? next() : res.status(400).json([Errors._idInvalid]),
        update: (req, res, next) => {
            if (Validate.isId(req.params._id)) {
                const required = ['body', 'title', 'id']
                const error = Validate.requestOptional(req, required, Errors)
                error ? res.status(400).json(error) : next()
            } else {
                res.status(400).json([Errors._idInvalid])
            }
        }
    }
}
