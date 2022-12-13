import { createProductsServices } from "../../services"

const createProductsControllers = async (req,res) => {
    const [status,data] = await createProductsServices(req.validatedBody)
    return res.status(status).json(data)
}

export default createProductsControllers