const {
  getProductsController,
  createProductController,
  updateProductController,
  deleteProductController,
  getProductByIdController,
  getProductTitleController
} = require("../controllers/productsController");

const getProductsHandler = async (req, res) => {
  const { title } = req.query;
  try {
    const result = title ? await getProductTitleController(title) : await getProductsController();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getProductByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getProductByIdController(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createProductHandler = async (req, res) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = req.body;
  try {
    const result = await createProductController(
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const updateProductHandler = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = req.body;
  try {
    const result = await updateProductController(id, {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const deleteProductHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteProductController(id);
    console.log(result)
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};




module.exports = {
  getProductsHandler,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
  getProductByIdHandler,
  
};
