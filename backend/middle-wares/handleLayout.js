var userRepo = require('../repos/userRepo');


module.exports = (req, res, next) => {
    
	if (req.session.isLogged === undefined) {
		req.session.isLogged = false;
    }
    userRepo.loadAll().then(rows => {
        console.log(rows);
        res.locals.layoutVM = {
            users: rows
        };
        // console.log(res.locals.layoutVM.curUser);
        next();
    });
};