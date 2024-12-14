const UserService = require("../services/UserService");


class UserController {

    /**
     * Trả về danh sách toàn bộ user
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async showAll(req, res) {
        try {
            const data = await UserService.getAll();

            return res.status(200).json({
                success: true,
                message: "List of Users",
                data: data
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Server Error" });
        }
    }


}



module.exports = new UserController();
