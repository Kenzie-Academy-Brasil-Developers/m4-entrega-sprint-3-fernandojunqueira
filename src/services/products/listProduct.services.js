import database from "../../database"
import AppError from "../../errors"

const listProductServices = async (id) => {
    try {
        
        const [queryResponse] = await database
        .query(`SELECT * FROM products WHERE id = '${id}'`)
        .then((res) => res.rows)
    
        return [200,queryResponse]
    } catch (error) {
        throw new AppError("category do not exists", 404)
    }
}

export default listProductServices