var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(res.__('index.title', 'title'));
    res.render('index', {
            title: res.__('title', 'Home page'),
            menus: res.__('menus'),
            signup: res.__('signup'),
            login: res.__('login')
        });
});

module.exports = router;
