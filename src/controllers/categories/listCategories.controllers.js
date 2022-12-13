import { listCategoriesServices } from "../../services";

const listCategoriesControllers = async (req,res) => {
    const [status,data] = await listCategoriesServices();

    return res.status(status).json(data)
}

export default listCategoriesControllers