
const Error = require('../errors/persistence/error')

const sucessCreate = res => data => res.status(201).json(data)

const error = res => data => res.status(500).json(data)

const returnUpdate = res => data =>
    (data.nModified)
        ? res.status(200).json(Error.sucessUpdate)
        : res.status(400).json(Error.errorUpdate)

const findSuccess = res => data =>
    (data)
        ? res.status(200).json(data)
        : res.status(400).json(Error.findOneEmpty)

const deleteSucess = res => data =>
    (data.nModified)
        ? res.status(200).json(Error.sucessDelete)
        : res.status(400).json(Error.errorDelete)

const findAllSuccess = res => data =>
    (data.length > 0)
        ? res.status(200).json(data)
        : res.status(400).json(Error.findOneEmpty)

module.exports = {
    sucessCreate,
    error,
    returnUpdate,
    deleteSucess,
    findSuccess,
    findAllSuccess
}
