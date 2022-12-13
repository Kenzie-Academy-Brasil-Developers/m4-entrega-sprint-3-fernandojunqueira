import database from "../../database"

const deleteProductServices = async (id) => {
    const [queryResponse] = await database
    .query(`DELETE FROM products  WHERE id = '${id}' RETURNING *`)
    .then((res) => res.rows)

    return [204,queryResponse]
}

export default deleteProductServices