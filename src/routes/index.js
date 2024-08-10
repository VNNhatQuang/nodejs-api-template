const user = require("./user");


/**
 * Define routes
 * @param {core.Express} app 
 */
const Routes = (app) => {
    app.use('/api/user', user);
}



module.exports = Routes;
