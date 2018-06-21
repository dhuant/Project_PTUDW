
var express = require('express'),
    SHA256 = require('crypto-js/sha256'),
    moment = require('moment');

var router = express.Router();
var config = require('../config/config');

var userRepo = require('../repos/userRepo'),
    categoryRepo = require('../repos/categoryRepo'),
    brandRepo = require('../repos/brandRepo'),
    productRepo = require('../repos/productRepo');

var restrict = require('../middle-wares/restrict');

router.get('/admin', (req, res) => {
    var vm = {
        layout: false
    }
    res.render('admin/users/login', vm);
});

router.post('/admin', (req, res) => {
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

router.get('/admin/customers', restrict, (req, res) => {

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

router.post('/admin/customers', (req, res) => {
    var searchname = req.body.searchname;
    userRepo.search(searchname, 0).then(rows => {
        //console.log(rows);
        for (let i = 0; i < rows.length; i++) {
            rows[i].DOB = moment(rows[i].DOB).format("DD/MM/YYYY");
        }
        if (rows.length == 0) {
            vm = {
                noUser: true,
                count: 0,
            }
        }
        else {
            vm = {
                result: rows,
                count: rows.length
            }
        }
        vm.searchname = searchname;
        res.render('admin/users/search', vm);
    });
});

/*booktore */
router.get('/', (req, res) => {
    var p1 = productRepo.productlatest();
    var p2 = productRepo.productbestview();
    Promise.all([p1, p2]).then(([latestRows, viewRows]) => {
        for (let i = 0; i < latestRows.length; i++) {
            latestRows[i].Saling = false;
            latestRows[i].New = false;
            latestRows[i].Saleprice = latestRows[i].Price;
            if (latestRows[i].Sale != 0) {
                latestRows[i].Saling = true;
                latestRows[i].Saleprice = Math.floor(latestRows[i].Price * (100 - latestRows[i].Sale) / 100000) * 1000;
                latestRows[i].Salenumber = latestRows[i].Sale;
                latestRows[i].Oldprice = latestRows[i].Price;
            }
            var star = 0;
            var today = new Date();
            var date = latestRows[i].Date;
            var time = (today.getTime() - date.getTime()) / 1000;
            if (time < 2 * config.NEW_BOOK) {
                latestRows[i].New = true;
            }
            if (latestRows[i].View < 5) {
                star = 1;
            }
            else if (latestRows[i].View >= 5 && latestRows[i].View < 10) {
                star = 2;
            }
            else if (latestRows[i].View >= 10 && latestRows[i].View < 15) {
                star = 3;
            }
            else if (latestRows[i].View >= 15 && latestRows[i].View < 20) {
                star = 4;
            }
            else {
                star = 5;
            }
            var Star = [];
            var notStar = [];
            for (let i = 0; i < star; i++) {
                Star.push(1);
            }
            for (let i = 0; i < 5 - star; i++) {
                notStar.push(1);
            }
            latestRows[i].Star = Star;
            latestRows[i].notStar = notStar;
        }
        for (let i = 0; i < viewRows.length; i++) {
            viewRows[i].Saling = false;
            viewRows[i].New = false;
            viewRows[i].Saleprice = viewRows[i].Price;
            if (latestRows[i].Sale != 0) {
                viewRows[i].Saling = true;
                viewRows[i].Saleprice = Math.floor(viewRows[i].Price * (100 - viewRows[i].Sale) / 100000) * 1000;
                viewRows[i].Salenumber = viewRows[i].Sale;
                viewRows[i].Oldprice = viewRows[i].Price;
            }
            var star = 0;
            var today = new Date();
            var date = viewRows[i].Date;
            var time = (today.getTime() - date.getTime()) / 1000;
            if (time < 2 * config.NEW_BOOK) {
                viewRows[i].New = true;
            }
            if (viewRows[i].View < 5) {
                star = 1;
            }
            else if (viewRows[i].View >= 5 && viewRows[i].View < 10) {
                star = 2;
            }
            else if (viewRows[i].View >= 10 && viewRows[i].View < 15) {
                star = 3;
            }
            else if (viewRows[i].View >= 15 && viewRows[i].View < 20) {
                star = 4;
            }
            else {
                star = 5;
            }
            var Star = [];
            var notStar = [];
            for (let i = 0; i < star; i++) {
                Star.push(1);
            }
            for (let i = 0; i < 5 - star; i++) {
                notStar.push(1);
            }
            viewRows[i].Star = Star;
            viewRows[i].notStar = notStar;
        }
        vm = {
            layout: 'index.handlebars',
            bestview: viewRows,
            latest: latestRows
        }
        res.render('bookstore/index/index', vm);
    });
});

router.get('/category/:id', (req, res) => {

    if (!req.session.limit)
        req.session.limit = 9;

    var limit = req.session.limit;

    var page = req.query.page;
    if (!page)
        page = 1;
    var offset = (page - 1) * limit;

    var p1 = productRepo.countProductsbyCategory(req.params.id);
    var p2 = productRepo.loadAllProductsbyCategory(req.params.id, limit, offset);
    var p3 = categoryRepo.single(req.params.id);

    Promise.all([p1, p2, p3]).then(([countRows, pRows, cRows]) => {
        var total = countRows[0].total;

        /*tính số page cần có */
        var nPage = Math.floor(total / limit);
        if (total % limit > 0)
            nPage++;
        /*end tính số page */

        var numbers = [];
        for (let i = 1; i <= nPage; i++) {
            numbers.push({
                value: i,
                isCurPage: i === +page
            });
        }

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

        for (let i = 0; i < pRows.length; i++) {
            pRows[i].New = false;
            pRows[i].Saling = false;
            if (pRows[i].Sale != 0) {
                pRows[i].Saling = true;
                pRows[i].Saleprice = Math.floor(pRows[i].Price * (100 - pRows[i].Sale) / 100000) * 1000;
            }
            var star = 0;
            var today = new Date();
            var date = pRows[i].Date;
            var time = (today.getTime() - date.getTime()) / 1000;
            if (time < 5 * config.NEW_BOOK) {
                pRows[i].New = true;
            }
            if (pRows[i].View < 5) {
                star = 1;
            }
            else if (pRows[i].View >= 5 && pRows[i].View < 10) {
                star = 2;
            }
            else if (pRows[i].View >= 10 && pRows[i].View < 15) {
                star = 3;
            }
            else if (pRows[i].View >= 15 && pRows[i].View < 20) {
                star = 4;
            }
            else {
                star = 5;
            }
            var Star = [];
            var notStar = [];
            for (let i = 0; i < star; i++) {
                Star.push(1);
            }
            for (let i = 0; i < 5 - star; i++) {
                notStar.push(1);
            }
            pRows[i].Star = Star;
            pRows[i].notStar = notStar;
        }

        vm = {
            layout: 'index.handlebars',
            products: pRows,
            CateName: cRows.Name,
            page_numbers: numbers,
            firstPage: firstPage,
            lastPage: lastPage,
            limit: limit
        }
        res.render('bookstore/category/index', vm);
    });
});
router.post('/category/:id', (req, res) => {
    req.session.limit = req.body.limit;
    res.redirect('/category/' + req.params.id);
});
router.get('/login', (req, res) => {
    vm = {
        layout: 'index.handlebars'
    }
    res.render('bookstore/index/login', vm);
});
router.post('/login', (req, res) => {
    var user = {
        username: req.body.username,
        password: SHA256(req.body.password).toString()
    };
    userRepo.loginCustomer(user).then(rows => {
        //console.log(rows);
        if (rows.length > 0) {
            req.session.isLogged = true;
            //res.redirect('/admin/dashboard');

            req.session.user = rows[0];
            vm = {
                layout: 'index.handlebars'
            }
            res.redirect('/');
        }
        else {
            vm = {
                layout: 'index.handlebars',
                error: true
            }
            res.render('bookstore/index/login', vm);
        }
    });
});
router.get('/register', (req, res) => {
    vm = {
        layout: 'index.handlebars'
    }
    res.render('bookstore/index/register', vm);
});

router.post('/register', (req, res) => {
    req.body.Username = req.body.username;
    var obj = req.body;
    if (obj.password != obj.confirm || obj.name == '' || obj.email == '' || obj.username == '' || obj.password == '' || obj.phone == '') {
        vm = {
            error: true,
            layout: 'index.handlebars'
        };
        res.render('bookstore/index/register', vm);
    }
    else {
        userRepo.loadAll().then(rows => {
            var error = false;
            for (let i = 0; i < rows.length; i++) {
                if (obj.username == rows[i].Username || obj.email == rows[i].Email || obj.phone == rows[i].Phone) {
                    error = true;
                    break;
                }
            }
            if (error) {
                vm = {
                    error: true,
                    layout: 'index.handlebars'
                };
                res.render('bookstore/index/register', vm);
            }
            else {
                userRepo.addCustomer(obj).then(value => {
                    req.session.isLogged = true;
                    req.session.user = obj;
                    res.redirect('/');
                }).catch(err => {
                    res.end('fail');
                });
            }

        })
    }
});

router.post('/logout', (req, res) => {
    req.session.isLogged = false;
    req.session.user = null;
    res.redirect(req.headers.referer);
});

router.get('/products', (req, res) => {
    productRepo.single(req.query.id).then(rows => {
        rows.View++;
        var rows = rows;
        var p1 = productRepo.loadAllbyCategory(rows.CateId);
        var p2 = productRepo.loadAllbyBrand(rows.BraId);
        var p3 = productRepo.updateViewProduct(rows.id, rows.View);
        Promise.all([p1, p2, p3]).then(([cateRows, brandRows, value]) => {
            //console.log(cateRows);
            //console.log(brandRows);
            var arrCate = [];
            var arrBrand = [];
            if (cateRows.length > 6) {
                for (let i = 0; i < 6; i++) {
                    arrCate.push(cateRows[i]);
                }
            }
            else {
                arrCate = cateRows;
            }

            if (brandRows.length > 6) {
                for (let i = 0; i < 6; i++) {
                    arrBrand.push(brandRows[i]);
                }
            }
            else {
                arrBrand = brandRows;
            }

            var isSaling = false;
            var salePrice = 0;
            if (rows.Sale != 0) {
                isSaling = true;
                salePrice = Math.floor(rows.Price * (100 - rows.Sale) / 100000) * 1000;
            }
            rows.isSaling = isSaling;
            rows.newPrice = salePrice;

            if (rows.View < 5) {
                star = 1;
            }
            else if (rows.View >= 5 && rows.View < 10) {
                star = 2;
            }
            else if (rows.View >= 10 && rows.View < 15) {
                star = 3;
            }
            else if (rows.View >= 15 && rows.View < 20) {
                star = 4;
            }
            else {
                star = 5;
            }
            var Star = [];
            var notStar = [];
            for (let i = 0; i < star; i++) {
                Star.push(1);
            }
            for (let i = 0; i < 5 - star; i++) {
                notStar.push(1);
            }
            rows.Star = Star;
            rows.notStar = notStar;
            vm = {
                layout: 'index.handlebars',
                product: rows,
                category: arrCate,
                brand: arrBrand
            }
            res.render('bookstore/product/index', vm);
        });
    });
});

module.exports = router;