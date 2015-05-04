var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
    res.render('index', {
            title: res.__('users.login.title'),
            menus: res.__('menus'),
            signup: res.__('signup'),
            login: res.__('login')
        });
});


module.exports = router;
