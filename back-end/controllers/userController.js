
var express = require('express'),
    moment = require('moment'),
    SHA256 = require('crypto-js/sha256');

var config = require('../config/config');
var router = express.Router();

var userRepo = require('../repos/userRepo');
var restrict = require('../middle-wares/restrict');

router.get('/', restrict, (req, res) => {

    /*kiểm tra đang ở trang nào của phân trang */
    var page = req.query.page;
    if (!page) //nếu ban đầu dô thì page = 1
        page = 1;
    /*end kiểm tra */

    var offset = (page - 1) * config.USERS_PER_PAGE;//tính limit có thể có trong 1 trang

    var p1 = userRepo.loadAllbyLimit(offset); //load các user trong khoảng phù hợp
    var p2 = userRepo.countUsers(); //đếm tổng số user

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
            if(numbers[i].isCurPage){
                if(numbers[i].value === 1){
                    firstPage = {
                        isFirstPage: true,
                        value: numbers[i].value
                    }
                    lastPage = {
                        isLastPage: false,
                        value: numbers[i].value + 1
                    }
                }
                else if(numbers[i].value === nPage){
                    lastPage = {
                        isLastPage: true,
                        value: numbers[i].value
                    }
                    firstPage = {
                        isFirstPage: false,
                        value: numbers[i].value - 1
                    }
                }
                else{
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
            users: pRows,
            noUser: pRows.length === 0,
            page_numbers: numbers,
            firstPage: firstPage,
            lastPage: lastPage
        }
        /*end obj vm */

        res.render('admin/users/index',  vm);
    });
});

router.post('/', (req, res) => {
    res.redirect('/admin/dashboard');
});
router.get('/add', (req, res) => {
    userRepo.loadAll().then(rows => {
        var vm = {
            alert: false
        };
        res.render('admin/users/add', vm);
    });
});

router.post('/add', (req, res) => {
    req.body.password = SHA256(req.body.password).toString();
    userRepo.add(req.body).then(value => {
        var vm = {
            alert: true
        };
        res.redirect('/admin/users');
    }).catch(err => {
        console.log(err);
        res.end('fail');
    });
});


router.get('/edit', restrict, (req, res) => {
    userRepo.single(req.query.id).then(c => {
        if (c.Actived === 0)
            c.check = false;
        else c.check = true;
        c.DOB = moment(c.DOB).format("DD/MM/YYYY");
        var vm = {
            users: c
        };
        res.render('admin/users/edit', vm);
    });
});
router.post('/edit', (req, res) => {
    userRepo.update(req.body).then(value => {
        res.redirect('/admin/users');
    });
});


router.get('/resetpassword', (req, res) => {
    userRepo.single(req.query.id).then(c => {
        var vm = {
            users: c
        };
        res.render('admin/users/resetpassword', vm);
    });
});
router.post('/resetpassword', (req, res) => {
    userRepo.resetpassword(req.body).then(value => {
        res.redirect('/admin/users');
    });
});
module.exports = router;