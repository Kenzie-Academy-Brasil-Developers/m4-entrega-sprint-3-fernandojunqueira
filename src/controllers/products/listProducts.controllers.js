import { listProductsServices } from "../../services"

const listProductsControllers = async (req,res) => {
    const [status,data] = await listProductsServices()
    return res.status(status).json(data)
}

export default listProductsControllers