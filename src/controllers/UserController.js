const User = require("../models/User");
const UserService = require("../services/UserService");


const UserController = {

    /**
     * Thực hiện đăng nhập user
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    login: async (req, res) => {
        try {
            const { userName, password } = req.body;

            const user = await UserService.login(userName, password);

            return res.status(200).json({
                success: true,
                message: "Login",
                data: user,
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Server Error" });
        }
    },

    /**
     * Trả về danh sách toàn bộ user
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    showAll: async (req, res) => {
        try {

            const data = await User.findAll();

            return res.status(200).json({
                success: true,
                message: "List of Users",
                data: data
            })
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Server Error" });
        }
    },

    

}



module.exports = UserController;
