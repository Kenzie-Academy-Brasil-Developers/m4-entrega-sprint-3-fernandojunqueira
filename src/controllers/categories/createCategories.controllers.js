import { createCategoriesServices } from "../../services"

const createCategoriesController = async (req,res) => {
    const [status,data] = await createCategoriesServices(req.validatedBody)
    return res.status(status).json(data)
}

export default createCategoriesController