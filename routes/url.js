module.exports = (app) => {
    /**
     * Express
     */
    const api = app.system.express.connection

    /**
     * Controllers
     */
    const {
        createShortUrl,
        get,
        getStatistic,
        getAllTransitions,
        getAll
    } = app.controllers.urls
    const {checkUserAuth} = app.middleware.authorization

    /**
     * Routes
     */
    api.post('/url', checkUserAuth, createShortUrl)
    api.get('/url', checkUserAuth, getAll)
    api.get('/url/transitions', checkUserAuth, getAllTransitions)
    api.post('/url/:url_id', checkUserAuth, getStatistic)
    api.get('/:short_url', get)
}