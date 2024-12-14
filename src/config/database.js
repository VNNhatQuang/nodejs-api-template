const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();


class Database {
    #sequelize;

    constructor() {
        if (!Database.instance) {
            try {
                this.#sequelize = new Sequelize(
                    process.env.DB_NAME,
                    process.env.DB_USER,
                    process.env.DB_PASSWORD,
                    {
                        host: process.env.DB_HOST,
                        dialect: "mysql",
                        logging: false,
                    }
                );
                console.log("Connection to Database successfully.");
                Database.instance = this;
            } catch (error) {
                console.error("Failed to initialize Sequelize instance:", error);
                throw error;
            }
        }
        return Database.instance;
    }

    getSequelize() {
        return this.#sequelize;
    }


}



module.exports = new Database().getSequelize();
