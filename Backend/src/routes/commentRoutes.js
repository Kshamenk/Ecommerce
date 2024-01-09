const { Router } = require("express");
const { getCommentsByIdHandler, getAllCommentsHandler, createCommentHandler } = require("../handlers/commentHandler");




const commentRoutes = Router()

commentRoutes.post("/", createCommentHandler)
commentRoutes.get("/", getAllCommentsHandler)
commentRoutes.get("/:id", getCommentsByIdHandler)


module.exports = {commentRoutes}    