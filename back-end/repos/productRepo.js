var db = require('../fn/db');
var moment = require('moment'),
    SHA256 = require('crypto-js/sha256');

var config = require('../config/config');

exports.loadAll = () => {
    var sql = `select pros.id as id, pros.Name as Name, cates.Name as Category, brs.Name as Brand,
    pros.Date as Date, pros.Sale as Sale, pros.Price as Price, users.Fullname as Creator 
    from products pros, users, brands brs, categories cates
    where pros.Category = cates.id and pros.Brand = brs.id and pros.Creator = users.id`;
    return db.load(sql);
}

var sql = 
`
select pros.Name as Name, cates.Name as Category, brs.Name as Brand,
 pros.Date as Date, pros.Sale as Sale, pros.Price as Price, users.Fullname as Creator 
 from products pros, users, brands brs, categories cates
 where pros.Category = cates.id and pros.Brand = brs.id and pros.Creator = users.id;
`