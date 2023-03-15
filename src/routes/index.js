const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // app.get('/', function (req, res) {
    //     res.render('home');
    // })

    // app.get('/news', function (req, res) {
    //     res.render('news');
    // })

    app.use('/news', newsRouter);

    // app.get('/search',function (req, res) {
    //     //lấy key tìm kiếm
    //     //console.log('key:',req.query.q);
    //     res.render('search');
    // })
    app.use('/', siteRouter);

    // app.post('/search',function (req, res) {
    //     //lấy key tìm kiếm
    //     //console.log('key:',req.query.q);
    //     res.render('news');
    // })

    app.listen(3000);
}

module.exports = route;
