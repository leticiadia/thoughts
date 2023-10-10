const express = require("express");
const ThoughtsController = require("./controllers/ThoughtsController");
const UsersController = require("./controllers/UsersController");

const router = express.Router();

router.get("/thoughts", ThoughtsController.findAllThoughts);
router.get("/thoughts/:id", ThoughtsController.findThoughts);
router.post("/thoughts", ThoughtsController.createThought);
router.put("/thoughts/:id", ThoughtsController.updateThought);
router.delete("/thoughts/:id", ThoughtsController.deleteThought);

router.get("/users", UsersController.findAllUsers);
router.get("/users/:id", UsersController.findUser);
router.post("/users", UsersController.createUser);
router.put("/users/:id", UsersController.updateUser);
router.delete("/users/:id", UsersController.deleteUser);

module.exports = router;
