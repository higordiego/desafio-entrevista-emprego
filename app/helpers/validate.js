const mongoose = require('mongoose')

const requestRequired = (req, required, Errors) => {
    required.map((key, index) => {
        req.assert(required[index], Errors[key]).notEmpty()
    })
    return req.validationErrors()
}

const requestOptional = (req, required, Errors) => {
    required.map((key, index) => {
        req.assert(required[index], Errors[key]).optional().notEmpty()
    })
    return req.validationErrors()
}

const isId = id => (mongoose.Types.ObjectId.isValid(id))

module.exports = {
    requestRequired,
    isId,
    requestOptional
}
