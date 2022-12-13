import database from "../../database"

const listCategoryServices = async (id) => {
    const [queryResponse] = await database
    .query( `SELECT * FROM categories WHERE id = $1`,[id])
    .then((res) => res.rows)
    
    if(!queryResponse){
        return [404, {message: "Not found"}]
    }

    return [200,queryResponse]
}

export default listCategoryServices