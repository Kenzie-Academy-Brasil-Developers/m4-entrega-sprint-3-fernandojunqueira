import database from "../../database"

const deleteCategoryServices = async (id) => {
    const [queryResponse] = await database
    .query(`DELETE FROM categories WHERE id = $1 RETURNING *`,[id])
    .then((res) => res.rows)

    return [204,queryResponse]
}

export default deleteCategoryServices