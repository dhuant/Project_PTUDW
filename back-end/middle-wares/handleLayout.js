var userRepo = require('../repos/userRepo');


module.exports = (req, res, next) => {
    
	if (req.session.isLogged === undefined) {
		req.session.isLogged = false;
    }
    userRepo.loadAll().then(rows => {
        res.locals.layoutVM = {
            users: rows,
            isLogged: req.session.isLogged,
            curUser: req.session.user
        };
        next();
    });
};