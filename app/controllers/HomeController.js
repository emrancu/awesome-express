

class HomeController {

    index(req, res) {
       res.render('index', { name: req.query.name});
    }
}

export default HomeController = new HomeController();
