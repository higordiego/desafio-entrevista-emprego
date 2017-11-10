
const Error = require('../errors/persistence/error')

const sucessCreate = res => data => res.status(201).json(data)

const error = res => data => res.status(500).json(data)

const returnUpdate = res => data =>
    (data[0])
        ? res.status(200).json(Error.sucessUpdate)
        : res.status(400).json(Error.errorUpdate)

const findSuccess = res => data =>
    (data)
        ? res.status(200).json(data)
        : res.status(400).json(Error.findOneEmpty)

module.exports = {
    sucessCreate,
    error,
    returnUpdate,
    findSuccess
}
