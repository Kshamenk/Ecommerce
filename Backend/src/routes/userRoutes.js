const { Router } = require("express")
const {
    getUserHandler,
    getUserByIdHandler,
    createUserHandler,
    deleteUserHandler,
    updateUserHandler
  } = require("../handlers/usersHandler")

const userRoutes = Router()

userRoutes.get("/", getUserHandler)
userRoutes.get("/:id", getUserByIdHandler)
userRoutes.post("/", createUserHandler)
userRoutes.put("/:id", updateUserHandler)
userRoutes.delete("/:id", deleteUserHandler)


module.exports = {userRoutes}