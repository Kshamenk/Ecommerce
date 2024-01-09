
const { Product } = require("../db/db.js");

const getProductsController = async () => {
  const data = await Product.findAll()
  return data
};

const getProductByIdController = async (id) => {
  const data = await Product.findByPk(id)
  return data
}
const getProductTitleController = async (title) => {
  const data = await getProductsController()
  const dataTitle = data.filter((e) =>
    e.title.toLowerCase().includes(title.toLowerCase())
  );

  return dataTitle
}

const createProductController = async (
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
) => {
  const product = await Product.create({
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
  return product
};


const updateProductController = async (
  id,
  {
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
  }
) => {
  const product = await Product.findByPk(id);
  await product.update({
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
  return product;
};
const deleteProductController = async (id) => {
  const productDelete = await Product.destroy({
    where: { id: id }
  });
  return "Producto Eliminado";
};




module.exports = {
  getProductsController,
  createProductController,
  updateProductController,
  deleteProductController,
  getProductByIdController,
  getProductTitleController,
};
