const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const Authenticate = require("../middleware/Authenticate");
const Validate = require("../middleware/Validate");


/**
 * @swagger
 * tags:
 *   - name: User
 *     description: User Functions
 */


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
router.get('/', Authenticate, UserController.showAll);



module.exports = router;
