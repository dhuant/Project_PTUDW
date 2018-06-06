





var express = require('express');
var brandRepo = require('../repos/brandRepo');

var config = require('../config/config');

var restrict = require('../middle-wares/restrict');

var router = express.Router();

// router.get('/', (req, res) => {
//     brandRepo.loadAll().then(rows => {
//         var vm = {
//             brands: rows
//         };
//         res.render('admin/brands/index', vm);
//     });
// });

router.get('/',  (req, res) => {
    res.render('admin/orders/index');
});




router.get('/add', (req, res) => {
    var vm = {
        alert: false
    };
    res.render('admin/brands/add', vm);
});

router.post('/add', (req, res) => {
    brandRepo.add(req.body).then(value => {
        var vm = {
            alert: true
        };
        res.redirect('/admin/brands');
    }).catch(err => {
        res.end('fail');
    });
});

// router.get('/delete', (req, res) => {
//     var vm = {
//         CatId: req.query.id
//     }
//     res.render('category/delete', vm);
// });

// router.post('/delete', (req, res) => {
//     categoryRepo.delete(req.body.CatId).then(value => {
//         res.redirect('/category');
//     });
// });

router.get('/edit', (req, res) => {
    brandRepo.single(req.query.id).then(c => {
        var vm = {
            brand: c
        };
        res.render('admin/brands/edit', vm);
    });
});

router.post('/edit', (req, res) => {
    brandRepo.update(req.body).then(value => {
        res.redirect('/admin/brands');
    });
});


module.exports = router;