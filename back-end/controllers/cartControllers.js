


var express = require('express'),
    SHA256 = require('crypto-js/sha256'),
    moment = require('moment');

var router = express.Router();
var config = require('../config/config');

var userRepo = require('../repos/userRepo'),
    categoryRepo = require('../repos/categoryRepo'),
    brandRepo = require('../repos/brandRepo'),
    productRepo = require('../repos/productRepo'),
    orderRepo = require('../repos/orderRepo'),
    cartRepo = require('../repos/cartRepo');

var restrict = require('../middle-wares/restrict'),
    checklogout = require('../middle-wares/checklogout');


router.get('/', (req, res) => {
    if (!req.session.cart) {
        req.session.cart = [];
    }
    if (!req.session.cartLayout) {
        req.session.cartLayout = [];
    }
    var Items = [];
    for (let i = 0; i < req.session.cart.length; i++) {
        var Item = req.session.cart[i];
        var p = productRepo.single(Item.id);
        Items.push(p);
    }
    Promise.all(Items).then(result => {
        var total = 0;
        for (let i = 0; i < result.length; i++) {
            result[i].Count = req.session.cart[i].count;
            //console.log(result[i]);
            result[i].Saling = false;
            salePrice = 0;
            result[i].Total = req.session.cart[i].count * result[i].Price;
            if (result[i].Sale != 0) {
                result[i].Saling = true;
                salePrice = Math.floor(result[i].Price * (100 - result[i].Sale) / 100000) * 1000;
                result[i].Total = req.session.cart[i].count * salePrice;
            }
            result[i].salePrice = salePrice;
            total += result[i].Total;

            // var itemCartLayout = {
            //     id: result[i].id,
            //     Name: result[i].Name,
            //     Count: req.session.cart[i].count,
            //     Price: salePrice,
            //     Picture: result[i].Picture
            // }
            // req.session.cartLayout.push(itemCartLayout);
        }
        req.session.Total = total;
        res.locals.layoutVM.total = total;
        // res.locals.layoutVM.cartLayout =  req.session.cartLayout;
        vm = {
            layout: 'index.handlebars',
            cart: result,
            total: total,
            isEmpty: result.length == 0
        }
        res.render('bookstore/cart/index', vm);
    });
});
router.post('/', (req, res) => {
    // console.log(req.session.cart);
    var Items = [];
    for (let i = 0; i < req.body.id.length; i++) {
        var item = {
            id: req.body.id[i],
            count: +req.body.count[i]
        }
        Items.push(item);
    }
    for (let i = 0; i < req.session.cart.length; i++) {

        if (Items[i].count == 0) {
            req.session.cart.splice(i, 1);
            req.session.cartLayout.splice(i, 1);
        }
        else {
            req.session.cart[i].count = Items[i].count;
            req.session.cartLayout[i].Count = Items[i].count;
        }
    }
    res.locals.layoutVM.cartLayout = req.session.cartLayout;
    res.redirect(req.headers.referer)
});
router.post('/add', (req, res) => {
    if (!req.session.cart) {
        req.session.cart = [];
    }
    if (!req.session.cartLayout) {
        req.session.cartLayout = [];
    }
    var item = {
        id: req.body.proId,
        count: +req.body.count
    }
    cartRepo.add(req.session.cart, item);
    var Items = [];
    for (let i = 0; i < req.session.cart.length; i++) {
        var Item = req.session.cart[i];
        var p = productRepo.single(Item.id);
        Items.push(p);
    }
    Promise.all(Items).then(result => {
        var total = 0;
        var cartLayout = [];
        for (let i = 0; i < result.length; i++) {
            salePrice = result[i].Price;
            result[i].Total = req.session.cart[i].count * result[i].Price;
            if (result[i].Sale != 0) {
                salePrice = Math.floor(result[i].Price * (100 - result[i].Sale) / 100000) * 1000;
                result[i].Total = req.session.cart[i].count * salePrice;
            }
            total += result[i].Total;
            var itemCartLayout = {
                id: result[i].id,
                Name: result[i].Name,
                Count: req.session.cart[i].count,
                Price: salePrice,
                Picture: result[i].Picture
            }
            cartLayout.push(itemCartLayout);
        }
        req.session.cartLayout = cartLayout;
        req.session.Total = total;
        res.locals.layoutVM.total = total;
        res.locals.layoutVM.cartLayout = req.session.cartLayout;
        res.redirect(req.headers.referer);
    });
});

router.post('/remove', (req, res) => {
    var id = req.body.id;
    cartRepo.remove(req.session.cart, id);
    for (let i = 0; i < req.session.cartLayout.length; i++) {
        if (id == req.session.cartLayout[i].id) {
            req.session.cartLayout.splice(i, 1);
            break;
        }
    }
    res.locals.layoutVM.cartLayout = req.session.cartLayout;
    res.redirect(req.headers.referer);
});
module.exports = router;