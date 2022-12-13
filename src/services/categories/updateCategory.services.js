import database from "../../database"

const updateCategoryServices = async (payload,id) => {

    let query = `UPDATE categories SET `
    const keys = Object.keys(payload)
    const values = Object.values(payload)

    keys.forEach((key,index) => {
        query += `${key} = \$${index+=1}`
    })

    console.log(query)

    // query = query.slice(0,-2)

    console.log(query)

    query += `WHERE id = \$${keys.length+=1} RETURNING *;`

    console.log(query)

    const [queryResponse] = await database
    .query(query,[...values,id])
    .then((res) => res.rows)

    return [200,queryResponse]
}

export default updateCategoryServices