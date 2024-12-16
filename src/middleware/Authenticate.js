const jwt = require("jsonwebtoken");


/**
 * Middleware để verify token
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const Authenticate = (req, res, next) => {
    // Lấy token từ header của client
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
        return res.status(403).json({
            success: false,
            message: "No token provided. Token is require"
        });
    }

    // Kiểm tra và giải mã token
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                success: false,
                message: "Failed to authenticate token."
            });
        }

        // Lưu thông tin giải mã vào request để sử dụng ở các route tiếp theo
        req.user = decoded;

        // Tiếp tục với request
        next();
    });
};



module.exports = Authenticate;
