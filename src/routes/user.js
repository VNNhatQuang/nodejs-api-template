const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const verifyToken = require("../middleware/VerifyToken");
const Validate = require("../middleware/Validate");
const LoginValidator = require("../validators/LoginValidator");


/**
 * @swagger
 * tags:
 *   - name: User
 *     description: User Functions
 */



/** Thực hiện đăng nhập user
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Login user
 *     tags: [User]
 *     description: API for function user login
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 description: The user name
 *                 default: ""
 *               password:
 *                 type: string
 *                 description: The password user
 *                 default: ""
 *             required:
 *               - userName
 *               - password
 *     responses:
 *       200:
 *         description: A list of test items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.post('/login', Validate(LoginValidator), UserController.login);

/** Lấy ra danh sách toàn bộ user
 * @swagger
 * /api/user:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of all users in the system.
 *     tags: [User]
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The user's ID
 *                   name:
 *                     type: string
 *                     description: The user's name
 *                   email:
 *                     type: string
 *                     description: The user's email
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: When the user was created
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     description: When the user was last updated
 */
router.get('/', verifyToken, UserController.showAll);



module.exports = router;
