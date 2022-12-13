import { deleteProductServices } from "../../services"

const deleteProductControllers = async (req,res) => {
    const [status,data] = await deleteProductServices(req.params.id)
    return res.status(status).json(data)
}

export default deleteProductControllers