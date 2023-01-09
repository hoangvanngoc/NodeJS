const newsRouter = require('./news')

function route(app) {
    app.get('/news', newsRouter)

    app.get('/', (req, res) => {
        res.render('home')
    })


    // page search
    app.get('/search', (req, res) => {
        res.render('search')
    })

    app.post('/search', (req, res) => {
        res.send('')
    })
}

module.exports = route;
