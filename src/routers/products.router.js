import { Router } from "express";
import { createProductsControllers, deleteProductControllers, listProductControllers, listProductsCategoryIdControllers, listProductsControllers } from "../controllers";
import updateProductControllers from "../controllers/products/updateProduct.controllers";
import { validateSchemaMiddlewares } from "../middlewares";
import { createProductsShape } from "../schemas";

const productsRouter = Router()

productsRouter.get("",listProductsControllers)
productsRouter.get("/:id",listProductControllers)
productsRouter.get("/category/:id",listProductsCategoryIdControllers)
productsRouter.patch("/:id",updateProductControllers)
productsRouter.delete("/:id",deleteProductControllers)
productsRouter.post("",validateSchemaMiddlewares(createProductsShape) ,createProductsControllers)

export default productsRouter