

/**
 * Middleware xử lý resource không được tìm thấy
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 * @returns 
 */
const NotFoundHandler = (req, res, next) => {
    return res.status(400).json({
        message: "Resources not found"
    });
}



module.exports = NotFoundHandler;
