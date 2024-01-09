const { Category } = require("../db/db.js")


const getAllCategoriesController = async () => {
  const response = await Category.findAll()

  

  return await response
}
const createCategoryController = async (name) => {
  
  const categories = await Category.findOrCreate({
    where: {name}
  })
  
  return categories
}
 



module.exports = {
    getAllCategoriesController,
    createCategoryController
}