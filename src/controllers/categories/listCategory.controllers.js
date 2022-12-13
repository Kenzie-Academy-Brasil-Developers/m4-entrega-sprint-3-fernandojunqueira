import { listCategoryServices } from "../../services"

const listCategoryControllers = async (req,res) => {
    const [status,data] = await listCategoryServices(req.params.id)
    return res.status(status).json(data)
    
}

export default listCategoryControllers