
var express = require('express'),
    SHA256 = require('crypto-js/sha256'),
    moment = require('moment');

var router = express.Router();
var config = require('../config/config');

var userRepo = require('../repos/userRepo');
var restrict = require('../middle-wares/restrict');

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
            var url = '/admin/dashboard';
            if (req.query.retUrl) {
                url = req.query.retUrl;
            }
            res.redirect(url);
        }
        else {
            var vm = {
                layout: false,
                error: true
            }
            res.render('admin/users/login', vm);
        }
    });

});

router.get('/customers', restrict, (req, res) => {

    /*kiểm tra đang ở trang nào của phân trang */
    var page = req.query.page;
    if (!page) //nếu ban đầu dô thì page = 1
        page = 1;
    /*end kiểm tra */

    var offset = (page - 1) * config.USERS_PER_PAGE;//tính limit có thể có trong 1 trang

    var p1 = userRepo.loadAllCustomersbyLimit(offset); //load các user trong khoảng phù hợp
    var p2 = userRepo.countCustomers(); //đếm tổng số user

    //vì không thể chạy lồng promise nên phải chạy song song
    Promise.all([p1, p2]).then(([pRows, countRows]) => {

        var total = countRows[0].total;//total là số lượng user

        /*tính số page cần có */
        var nPage = Math.floor(total / config.USERS_PER_PAGE);
        if (total % config.USERS_PER_PAGE > 0)
            nPage++;
        /*end tính số page */

        /*start mảng số lượng page gồm số thứ tự và isCurPage */
        var numbers = [];
        for (let i = 1; i <= nPage; i++) {
            numbers.push({
                value: i,
                isCurPage: i === +page
            });
        }
        /*end mảng số lượng page */
        var firstPage = {};
        var lastPage = {};
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i].isCurPage) {
                if (numbers[i].value === 1) {
                    firstPage = {
                        isFirstPage: true,
                        value: numbers[i].value
                    }
                    lastPage = {
                        isLastPage: false,
                        value: numbers[i].value + 1
                    }
                }
                else if (numbers[i].value === nPage) {
                    lastPage = {
                        isLastPage: true,
                        value: numbers[i].value
                    }
                    firstPage = {
                        isFirstPage: false,
                        value: numbers[i].value - 1
                    }
                }
                else {
                    lastPage = {
                        isLastPage: false,
                        value: numbers[i].value + 1
                    }
                    firstPage = {
                        isFirstPage: false,
                        value: numbers[i].value - 1
                    }
                }
            }
        }

        /*kiểm tra Actived và convert DOB cho dễ nhìn */
        for (let i = 0; i < pRows.length; i++) {
            var check = true;
            if (pRows[i].Actived === 0)
                check = false;
            pRows[i].check = check;
            pRows[i].DOB = moment(pRows[i].DOB).format("DD/MM/YYYY");
        }
        /*end kiểm tra và convert */
        // console.log(firstPage);
        // console.log(lastPage);
        /*obj vm để đẩy ra giao diện */
        var vm = {
            pagination: nPage !== 1,
            users: pRows,
            noUser: pRows.length === 0,
            page_numbers: numbers,
            firstPage: firstPage,
            lastPage: lastPage,
        }
        /*end obj vm */

        res.render('admin/users/customer', vm);
    });
});
module.exports = router;