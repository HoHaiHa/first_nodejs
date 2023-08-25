class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.render('NEWS DETAIL');
    }
}

module.exports = new NewsController();
