var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/**
 * user login
 */
router.get('/login', function(req, res, next) {
    res.render('login', {
            menus: res.__('menus'),
            signup: res.__('signup'),
            login: res.__('login'),
            or: res.__('or'),
            user_login: res.__("user login"),
            change_your_password: res.__('change your password'),
            remember_me: res.__('remember me')
        });
});

router.post('/login', function(req, res, next) {
    res.redirect('/');
});

/**
 * user signup
 */
router.get('/signup', function(req, res, next) {
    res.render('signup', {
            menus: res.__('menus'),
            signup: res.__('signup'),
            login: res.__('login'),
            or: res.__('or'),
            user_signup: res.__('user signup'),
            already_have_account: res.__('Already have account')
        });
});

module.exports = router;
