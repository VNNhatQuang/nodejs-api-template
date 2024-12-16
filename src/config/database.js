const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();


class Database {
    static #instance;
    #connection;

    constructor() {
        try {
            // console.log("Khởi tạo Object Database!");
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
        } catch (error) {
            console.error("Failed to initialize Sequelize instance:", error);
            throw error;
        }
    }

    /**
     * Hàm get instance của lớp Database - đảm bảo chỉ 1 instance duy nhất được tạo (Singleton)
     * @returns 
     */
    static getInstance() {
        if (!Database.#instance) {
            Database.#instance = new Database();
        }
        return Database.#instance;
    }

    /**
     * Hàm get connection Database với Sequenlize
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



module.exports = Database.getInstance();
