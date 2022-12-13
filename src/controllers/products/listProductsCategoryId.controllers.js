import { listProductsCategoryIdServices } from "../../services"

const listProductsCategoryIdControllers = async (req,res) => {
    const [status,data] = await listProductsCategoryIdServices(req.params.id)
    return res.status(status).json(data)
}

export default listProductsCategoryIdControllers