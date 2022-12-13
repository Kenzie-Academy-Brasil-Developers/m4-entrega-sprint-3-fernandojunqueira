import { Router } from "express";
import { listCategoriesControllers,createCategoriesController, listCategoryControllers, deleteCategoryControllers, updateCategoryControllers } from "../controllers";
import { validateSchemaMiddlewares } from "../middlewares";
import { createCategoriesShape } from "../schemas";

const categoriesRouter = Router()

categoriesRouter.get("",listCategoriesControllers)
categoriesRouter.post("", validateSchemaMiddlewares(createCategoriesShape) ,createCategoriesController)
categoriesRouter.get("/:id",listCategoryControllers)
categoriesRouter.patch("/:id",updateCategoryControllers)
categoriesRouter.delete("/:id",deleteCategoryControllers)

export default categoriesRouter