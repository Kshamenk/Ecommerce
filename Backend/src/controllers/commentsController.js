const { Comment } = require("../db/db.js");


const getAllCommentsController = async () => {
    const response = await Comment.findAll()
    return  response
}
const getCommentsByIdController = async (productId) => {
    const data = await Comment.findAll(productId)
    return data
}



const createCommentController = async (productId,text,createdAt) => {
    const comment = await Comment.create({
        productId,
        text,
        createdAt
    })
    return comment
}



module.exports = {

    getAllCommentsController,
    getCommentsByIdController,
    createCommentController
}