const { Router } = require("express")


const { createCategoryHandler, getAllCategoriesHandler } = require("../handlers/categoryHandler")

const categoryRoutes = Router()

categoryRoutes.get("/", getAllCategoriesHandler)
categoryRoutes.post("/", createCategoryHandler)




module.exports = {
    categoryRoutes
}
