import database from "../../database"

const listProductServices = async (id) => {
    const [queryResponse] = await database
    .query(`SELECT * FROM products WHERE id = '${id}'`)
    .then((res) => res.rows)

    console.log(queryResponse)
    if(!queryResponse){
        return [404,{message:"Not found"}]
    }

    return [200,queryResponse]
}

export default listProductServices