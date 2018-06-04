
var express = require('express'),
    SHA256 = require('crypto-js/sha256'),
    moment = require('moment');

var router = express.Router();

var userRepo = require('../repos/userRepo');


router.get('/', (req, res) => {
    var vm = {
        layout: false
    }
    res.render('admin/users/login', vm);
});

router.post('/', (req, res) => {
    var user = {
        username: req.body.username,
        password: SHA256(req.body.password).toString()
    };
    //console.log(user);
    userRepo.login(user).then(rows => {
        //console.log(rows);
        if (rows.length > 0) {
            req.session.isLogged = true;
            //res.redirect('/admin/dashboard');

            req.session.user = rows[0];
            var url = '/admin';
            if (req.query.retUrl) {
                url = req.query.retUrl;
            }
            res.redirect(url);
        }
        else {
            var vm = {
                layout: false,
                showErr: true,
                errMsg: 'login fail'
            }
            res.render('admin/users/login', vm);
        }
    });

});
module.exports = router;