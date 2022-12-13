import database from "../../database"
import AppError from "../../errors"

const updateCategoryServices = async (payload,id) => {
try {
    
    let query = `UPDATE categories SET `
    const keys = Object.keys(payload)
    const values = Object.values(payload)

    keys.forEach((key,index) => {
        query += `${key} = \$${index+=1}`
    })

    query += `WHERE id = \$${keys.length+=1} RETURNING *;`

    const [queryResponse] = await database
    .query(query,[...values,id])
    .then((res) => res.rows)

    return [200,queryResponse]
} catch (error) {
    throw new AppError("category do not exists", 404)
}
}

export default updateCategoryServices