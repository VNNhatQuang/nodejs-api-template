const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const dotenv = require("dotenv");
dotenv.config();


// Swagger Configuration
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Title Swagger",
            version: "1.0.0",
            description: "Description Swagger",
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                },
            }
        },
        security: [{
            bearerAuth: [],
        }],
    },
    // Đường dẫn đến các file chứa JSDoc comments (đứng ở thư mục gốc của dự án)
    apis: ["./src/routes/*.js"],
};

const specs = swaggerJsdoc(options);



module.exports = { swaggerUi, specs };
