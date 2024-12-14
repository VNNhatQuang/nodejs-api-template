const express = require("express");
const Routes = require("./routes");
const { swaggerUi, specs } = require("./config/swagger");
const database = require("./config/database");
const InitMiddleware = require("./middleware");
const NotFoundHandle = require("./middleware/NotFoundHandler");


// Common Configuration
const app = express();

// Middleware
InitMiddleware(app);

// Routes Configuration
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));  // Route Swagger UI
Routes(app);
app.use(NotFoundHandle);   // Middleware handle resources not found

// Test connection to DB
database.testConnection();



module.exports = app;
