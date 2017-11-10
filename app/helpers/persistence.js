const returnObject = require('./returnObject')

const create = (Model, res) => (data) =>
    Model.create(data)
        .then(returnObject.sucessCreate(res))
        .catch(returnObject.error(res))

const update = (Model, res) => (query, mod) =>
    Model.update(query, mod)
        .then(returnObject.returnUpdate(res))
        .catch(returnObject.error(res))

const findOne = (Model, res) => (query, mod) =>
    Model.findOne(query, mod)
        .then(returnObject.findSuccess(res))
        .catch(returnObject.error(res))

const findAll = (Model, res) => (query, mod) =>
    Model.find(query, mod)
        .then(returnObject.findSuccess(res))
        .catch(returnObject.error(res))

const remove = (Model, res) => (query, mod) =>
    Model.remove(query, mod)
        .then(returnObject.returnError(res))
        .catch(returnObject.error(res))

module.exports = {
    create,
    update,
    findOne,
    findAll,
    remove
}
