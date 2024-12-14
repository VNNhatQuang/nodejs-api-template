const auth = require("./auth");
const user = require("./user");


/**
 * Define routes
 * @param {express} app 
 */
const Routes = (app) => {
    app.use('/api/auth', auth);
    app.use('/api/user', user);
}



module.exports = Routes;
