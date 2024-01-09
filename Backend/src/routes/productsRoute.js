const { Router } = require("express");

const {
  getProductsHandler,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
  getProductByIdHandler,
  
} = require("../handlers/productsHandler");
const auth = require("../middlewares/auth")

const productsRoutes = Router();

productsRoutes.get("/", getProductsHandler);
productsRoutes.get("/:id", getProductByIdHandler);
productsRoutes.post("/", createProductHandler);
productsRoutes.put("/:id", updateProductHandler);
productsRoutes.delete("/:id", deleteProductHandler);


// productsRoutes.get("/private", auth.isAuth, function (req,res) {
//   res.status(200).send({message: "Tienes acceso"})
// })


module.exports = { productsRoutes };


