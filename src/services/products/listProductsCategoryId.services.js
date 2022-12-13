import database from "../../database"

const listProductsCategoryIdServices = async (id) => {
    const queryResponse = await database
    .query(`
    SELECT 
        p."name" ,p.price,c."name" as "category"
    FROM 
	    products p 
    JOIN
	    categories c ON p.category_id = c.id 
    WHERE 
	    c.id = $1 ;`,[id]
    )
    .then((res) => res.rows)
    return[200,queryResponse]
}

export default listProductsCategoryIdServices