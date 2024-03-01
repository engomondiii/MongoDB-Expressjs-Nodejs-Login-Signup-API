const router = require('express').Router();

const { userList } = require('../controllers/auth/userList');
const { userCreation } = require('../controllers/auth/userCreation');
const { tokenVerify } = require('../controllers/auth/tokenVerify');

router.post("/user-lists", userList)
router.post("/user-creation", userCreation)
router.get("/verify/:token", tokenVerify)

module.exports = { router }