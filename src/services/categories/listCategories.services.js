import database from "../../database"

const listCategoriesServices = async () => {
    const queryResponse = await database
    .query("SELECT * FROM categories;")
    .then((res) => res.rows)

    return [200,queryResponse]
}

export default listCategoriesServices