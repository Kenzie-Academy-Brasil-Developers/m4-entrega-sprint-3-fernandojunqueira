import { deleteCategoryServices } from "../../services"

const deleteCategoryControllers = async (req,res) => {
    const [status,data] = await deleteCategoryServices(req.params.id)
    return res.status(status).json(data)
}

export default deleteCategoryControllers