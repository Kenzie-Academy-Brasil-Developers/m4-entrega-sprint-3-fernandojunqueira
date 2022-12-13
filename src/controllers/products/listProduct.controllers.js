import { listProductServices } from "../../services"

const listProductControllers = async (req,res) => {
    const [status,data] = await listProductServices(req.params.id)
    console.log(status,data)
    return res.status(status).json(data)
}

export default listProductControllers