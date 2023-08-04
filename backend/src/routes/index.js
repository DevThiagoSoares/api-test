const express = require("express");
const router = express.Router();

//LOGIN
const loginController = require("../controllers/loginController");
router.post("/login", loginController.login);

//USERS
const userController = require("../controllers/userController");
router.post("/users", userController.createUser);
router.get("/users", userController.listUsers);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
