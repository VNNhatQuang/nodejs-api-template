const User = require("../models/User");
const jwt = require("jsonwebtoken");


class AuthService {

    /**
     * Hàm thực hiện chức năng đăng nhập và tạo token cho user
     * @param {String} userName 
     * @param {String} password 
     * @returns {Object}
     */
    async login(userName, password) {
        try {

            const user = await User.findOne({ where: { user_name: userName } });
            if (!user) {
                return {
                    loginStatus: false,
                    message: "The userName is wrong or doesn't exist"
                };
            }

            // So sánh password
            if (!(password === user.password)) {
                return {
                    loginStatus: false,
                    message: "The password isn't correct"
                };
            }

            // Tạo token
            const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });

            return {
                token: token,
                userName: user.userName,
                email: user.email,
                phoneNumber: user.phoneNumber
            };

        } catch (error) {
            console.log(error);
            return null;
        }
    }


}



module.exports = new AuthService();
