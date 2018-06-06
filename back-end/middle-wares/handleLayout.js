var userRepo = require('../repos/userRepo');


module.exports = (req, res, next) => {
    if (req.session.isLogged === undefined) {
        req.session.isLogged = false;
    }
    userRepo.loadAll().then(rows => {
        var preUrl = req.header('Referer');
        res.locals.layoutVM = {
            users: rows,
            isLogged: req.session.isLogged,
            curUser: req.session.user,
            preUrl: preUrl
        };
        next();
    });
};