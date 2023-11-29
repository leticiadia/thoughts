const express = require("express");

const UsersController = require("../controllers/UsersController");

const router = express.Router();

router.get("/users", UsersController.findAllUsers);
router.get("/users/:id", UsersController.findUser);
router.post("/users", UsersController.createUser);
router.put("/users/:id", UsersController.updateUser);
router.delete("/users/:id", UsersController.deleteUser);

module.exports = router;
