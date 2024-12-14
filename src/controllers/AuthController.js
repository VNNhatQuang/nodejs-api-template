const UserService = require("../services/AuthService");


class AuthController {

    /**
     * Thực hiện đăng nhập user
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async login (req, res) {
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
    }


}



module.exports = new AuthController();
