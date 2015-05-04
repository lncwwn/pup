var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(res.__('menus'));
    res.render('index', {
            menus: res.__('menus'),
            signup: res.__('signup'),
            login: res.__('login')
        });
});

module.exports = router;
