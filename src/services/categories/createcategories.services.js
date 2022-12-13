import database from "../../database";
import AppError from "../../errors";


const createCategoriesServices = async (payload) => {

    const findCategory = await database.query(`SELECT * FROM categories WHERE name = $1;`,[payload.name.trim()])

    if(findCategory.rows[0]){
        throw new AppError("category already exists", 400)
    }

    const [queryResponse] = await database
    .query(
        `INSERT INTO 
            categories("name")
        VALUES
            ($1)
        RETURNING*    
        `,
        [payload.name]
    )
    .then((res) => res.rows)

    return [201,queryResponse]

}

export default createCategoriesServices