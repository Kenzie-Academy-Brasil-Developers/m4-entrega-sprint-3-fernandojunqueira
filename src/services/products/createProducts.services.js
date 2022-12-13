import database from "../../database"
import AppError from "../../errors"
import { createProductsShape } from "../../schemas"

const createProductsServices = async (payload) => {
    
    const findProduct = await database.query(`SELECT * FROM products WHERE name = $1;`,[payload.name.trim()])

    if(findProduct.rowCount > 0){
        throw new AppError("product already exists", 400)
    }
    const queryResponse = await database
    .query(
     `
    INSERT INTO
        products("name",price,category_id)
    VALUES
        ($1, $2, $3)
    RETURNING *
    `,
    [payload.name, payload.price, payload.category_id]
    )
    .then((res) => res.rows[0])
    return [201,queryResponse]

    
}

export default createProductsServices