const User = require("../models/User");


class UserService {

    /**
     * Lấy danh sách toàn bộ users
     * @returns 
     */
    async getAll() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            return [];
        }
    }

}



module.exports = new UserService();
