var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
            title: 'Home page',
            menus: res.__('menus'),
            signup: res.__('signup'),
            login: res.__('login')
        });
});

module.exports = router;
