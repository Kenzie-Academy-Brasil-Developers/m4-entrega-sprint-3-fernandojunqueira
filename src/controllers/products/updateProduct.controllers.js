import { updateProductServices } from "../../services"

const updateProductControllers = async (req,res) => {
    const [status,data] = await updateProductServices(req.body,req.params.id)
    return res.status(status).json(data)
}

export default updateProductControllers