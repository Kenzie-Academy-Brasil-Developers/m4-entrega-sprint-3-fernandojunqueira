import { updateCategoryServices } from "../../services"

const updateCategoryControllers = async (req,res) => {
    const [status,data] = await updateCategoryServices(req.body,req.params.id)
    return res.status(status).json(data)
}

export default updateCategoryControllers