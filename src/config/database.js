const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();


class Database {
    #connection;    // private

    /**
     * Hàm khởi tạo instance của sequenlize, đảm bảo duy nhất 1 instance được khởi tạo (singleton)
     * @returns 
     */
    constructor() {
        if (!Database.instance) {
            try {
                this.#connection = new Sequelize(
                    process.env.DB_NAME,
                    process.env.DB_USER,
                    process.env.DB_PASSWORD,
                    {
                        host: process.env.DB_HOST,
                        dialect: "mysql",
                        logging: false,
                    }
                );
                Database.instance = this;
            } catch (error) {
                console.error("Failed to initialize Sequelize instance:", error);
                throw error;
            }
        }
        return Database.instance;
    }

    /**
     * Hàm get instance của sequenlize
     * @returns 
     */
    getConnection() {
        return this.#connection;
    }

    /**
     * Hàm test kết nối với database
     */
    async testConnection() {
        await this.#connection.authenticate()
            .then(() => console.log("Connection to Database successfully."))
            .catch(error => console.log("Unable to connect to DB:", error))
    }

    /**
     * Hàm đóng kết nối với database
     */
    async closeConnection() {
        await this.#connection.close()
            .then(() => console.log("Database connection closed successfully."))
            .catch(error => console.error("Error while closing the database connection:", error))
    }


}



module.exports = new Database();
