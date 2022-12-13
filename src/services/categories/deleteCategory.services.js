import database from "../../database"
import AppError from "../../errors"

const deleteCategoryServices = async (id) => {

    try {
        
        const [queryResponse] = await database
        .query(`DELETE FROM categories WHERE id = $1 RETURNING *`,[id])
        .then((res) => res.rows)
    
        return [204,queryResponse]
    } catch (error) {
        throw new AppError("category do not exists", 404)
    }


}

export default deleteCategoryServices