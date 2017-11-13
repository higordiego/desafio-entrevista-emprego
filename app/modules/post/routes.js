module.exports = app => {
    const Controller = require('./controller')(app)
    const Validate = require('./validate')(app)

    app.route(`/post`)
        .get(Controller.listAll)
        .post(Validate.create, Controller.create)

    app.route(`/post/:_id`)
        .get(Validate.validateId, Controller.listOne)
        .put(Validate.update, Controller.update)
        .delete(Validate.validateId, Controller.delete)
}
