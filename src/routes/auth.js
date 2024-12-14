const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const Validate = require("../middleware/Validate");
const LoginValidator = require("../validators/LoginValidator");


/**
 * @swagger
 * tags:
 *   - name: Authentication
 *     description: Authenticate Functions
 */


/** Thực hiện đăng nhập user
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Authentication]
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
router.post('/login', Validate(LoginValidator), AuthController.login);



module.exports = router;
