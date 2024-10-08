const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");


/**
 * Khởi tạo các middleware chung
 * @param {express} app 
 */
const InitMiddleware = (app) => {
    app.use(helmet());                                      // Secure Http response headers
    app.use(express.json());                                // Middleware handle data JSON
    app.use(express.urlencoded({ extended: true }));        // Middleware handle data from form (application/x-www-form-urlencoded)
    app.use(cors({ origin: false }));                       // Turn down CORS
    app.use(morgan("dev"));                                 // Logging
}



module.exports = InitMiddleware;
