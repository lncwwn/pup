var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
    res.render('login', {
            menus: res.__('menus'),
            signup: res.__('signup'),
            login: res.__('login'),
            change_your_password: res.__('change your password'),
            remember_me: res.__('remember me')
        });
});


module.exports = router;
