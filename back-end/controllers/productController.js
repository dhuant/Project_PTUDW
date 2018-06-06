
var express = require('express'),
    moment = require('moment'),
    SHA256 = require('crypto-js/sha256');
var brandRepo = require('../repos/brandRepo'),
    productRepo = require('../repos/productRepo'),
    categoryRepo = require('../repos/categoryRepo');

var config = require('../config/config');

var restrict = require('../middle-wares/restrict');

var router = express.Router();

router.get('/', restrict, (req, res) => {
    /*kiểm tra đang ở trang nào của phân trang */
    var page = req.query.page;
    if (!page) //nếu ban đầu dô thì page = 1
        page = 1;
    /*end kiểm tra */

    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;//tính limit có thể có trong 1 trang

    var p1 = productRepo.loadAllProductsbyLimit(offset); //load các user trong khoảng phù hợp
    var p2 = productRepo.countProducts(); //đếm tổng số user

    Promise.all([p1, p2]).then(([pRows, countRows]) => {
        var total = countRows[0].total;//total là số lượng user

        /*tính số page cần có */
        var nPage = Math.floor(total / config.PRODUCTS_PER_PAGE);
        if (total % config.PRODUCTS_PER_PAGE > 0)
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
        for (let i = 0; i < pRows.length; i++) {
            pRows[i].Date = moment(pRows[i].Date).format("DD/MM/YYYY");
        }

        /*obj vm để đẩy ra giao diện */
        var vm = {
            pagination: nPage !== 1,
            products: pRows,
            noProduct: pRows.length === 0,
            page_numbers: numbers,
            firstPage: firstPage,
            lastPage: lastPage,
        }
        /*end obj vm */
        res.render('admin/products/index', vm);
    });
});

router.get('/add', restrict, (req, res) => {
    var brands = brandRepo.loadAll();
    var categories = categoryRepo.loadAll();
    Promise.all([brands, categories]).then(([brandRows, cateRows]) => {
        var vm = {
            brands: brandRows,
            categories: cateRows,
            alert: false
        };
        res.render('admin/products/add', vm);
    });
});

router.post('/add', (req, res) => {
    productRepo.add(req.body).then(value => {
        var vm = {
            alert: true
        };
        res.redirect('/admin/products');
    }).catch(err => {
        res.end(err);
    });
});

router.get('/edit', restrict, (req, res) => {

    var brands = brandRepo.loadAll();
    var categories = categoryRepo.loadAll();
    var product = productRepo.single(req.query.id);
    Promise.all([brands, categories, product]).then(([brandRows, cateRows, proRows]) => {
        for (let i = 0; i < cateRows.length; i++) {
            if (cateRows[i].id === proRows.CateId) {
                cateRows.splice(i, 1);
                break;
            }
        }
        for (let i = 0; i < brandRows.length; i++) {
            if (brandRows[i].id === proRows.BraId) {
                brandRows.splice(i, 1);
                break;
            }
        }
        var vm = {
            product: proRows,
            brands: brandRows,
            categories: cateRows,
            alert: false
        };
        res.render('admin/products/edit', vm);
    });
});

router.post('/edit', (req, res) => {
    productRepo.update(req.body).then(value => {
        res.redirect('/admin/products');
    });
});


module.exports = router;