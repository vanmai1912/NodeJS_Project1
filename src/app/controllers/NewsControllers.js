class NewsController {
    // GET / News
    index(req, res) {
        res.render('news');
    }

    slug(req, res) {
        res.send('chào mừng đến với bình nguyên vô tận');
    }
}

module.exports = new NewsController();
