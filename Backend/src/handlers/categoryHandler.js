const { getAllCategoriesController, createCategoryController } = require("../controllers/categoryController");




const getAllCategoriesHandler = async (req,res) => {
    try {
      const result = await getAllCategoriesController()
      res.status(200).json(result)
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  const createCategoryHandler = async (req,res) => {
    const { name } = req.body
    try {
        const result = await createCategoryController(name)
        res.status(201).json(result)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
  }


  module.exports = {
    getAllCategoriesHandler,
    createCategoryHandler
  }