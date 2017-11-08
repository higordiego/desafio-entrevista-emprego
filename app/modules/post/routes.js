module.exports = app => {
    const Controller = require('./controller')(app)
    const Validate = require('./validate')(app)
    app.route(`/post`)
        .get(Controller.listaAll)
        .post(Validate.create, Controller.crate)

    app.route(`/post/:_id`)
        .put(Validate.update, Controller.update)
        .delete(Validate.delete, Controller.delete)
}
