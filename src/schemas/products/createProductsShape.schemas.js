import * as yup from "yup"
import { v4 } from "uuid"

const createProductsShape = yup.object().shape({
    id: yup.string().uuid().default(() => v4()).transform(() => v4),
    name: yup.string().max(200).required(),
    price: yup.number().required(),
    category_id: yup.number().required()
})

export default createProductsShape