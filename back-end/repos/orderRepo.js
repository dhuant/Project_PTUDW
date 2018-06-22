var db = require('../fn/db');

var config = require('../config/config');

exports.loadAll = () => {
    var sql = 'select * from orders';
    return db.load(sql);
}

exports.single = (id) => {
    return new Promise((resolve, reject) => {
        var sql = `select * from orders where id = ${id}`;
        db.load(sql).then(rows => {
            if (rows.length === 0) {
                resolve(null);
            } else {
                resolve(rows[0]);
            }
        }).catch(err => {
            reject(err);
        });
    });
}

// exports.add = (c) => {
//     var sql = `insert into categories(Name, Description) values('${c.name}','${c.description}')`;
//     return db.save(sql);
// }

// exports.delete = (id) => {
//     var sql = `delete from categories where CatId = ${id}`;
//     return db.save(sql);
// }

exports.update = (c) => {
    var sql = `update orders set Status = '${c.status}' where id = ${c.id}`;
    return db.save(sql);
}


exports.loadAllbyLimit = (offset) => {
    var sql = `select * from orders limit ${config.CATEGORIES_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}


exports.countOrders = () => {
	var sql = `select count(*) as total from orders`;
    return db.load(sql);
}

exports.loadAllDetail = () => {
    var sql = ` select * 
                from order_detail o, products p
                where o.product = p.id`;
    return db.load(sql);
}

exports.loadDetailByOrderID = (id) => {
    var sql = ` select * 
                from order_detail o, products p
                where o.product = p.id and o.Order = ${id}`;
    return db.load(sql);
}

exports.loadOrderByID = (id) => {
    var sql = ` select * 
                from orders o
                where o.Customer = ${id}`;
    return db.load(sql);
}