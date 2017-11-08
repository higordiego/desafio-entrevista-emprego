module.exports = app => {
    return {
        create: (req, res, next) => {
            req.assert('name', Errors.name).notEmpty().len(10, 30)
            const error = req.validationErrors()
            if (error) {
                res.status(400).json(error)
        },
        listOne: (req, res, next) => {

        },
        update: (req, res, next) => {

        },
        delete: (req, res, next) => {

        }
    }
}
