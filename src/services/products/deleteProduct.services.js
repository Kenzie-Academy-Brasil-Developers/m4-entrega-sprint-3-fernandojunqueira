import database from "../../database"
import AppError from "../../errors"

const deleteProductServices = async (id) => {

    try {
        const [queryResponse] = await database
        .query(`DELETE FROM products  WHERE id = '${id}' RETURNING *`)
        .then((res) => res.rows)
    
        return [204,queryResponse]
        
    } catch (error) {
        throw new AppError("category do not exists", 404)
    }
}

export default deleteProductServices