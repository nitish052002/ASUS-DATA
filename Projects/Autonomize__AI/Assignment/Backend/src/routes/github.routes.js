const {
  NewUserController,
  DeleteUserController,
  // getAllUsersController,
  updateUserDetail,
  getUserDetailByFieldNames,
  searchUserByFitlerController
} = require("../controllers/github.controllers");

const ROUTER = require("express").Router();





ROUTER.post("/user", NewUserController);
ROUTER.get("/users/:field", searchUserByFitlerController);
ROUTER.get("/users", getUserDetailByFieldNames);
ROUTER.patch("/user", updateUserDetail);
ROUTER.delete("/user", DeleteUserController);



module.exports = ROUTER;
