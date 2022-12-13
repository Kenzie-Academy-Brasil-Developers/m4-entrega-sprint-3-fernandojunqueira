import * as yup from "yup"

const createCategoriesShape = yup.object().shape({
    id: yup.string().default(),
    name: yup.string().max(200).required(),
})

export default createCategoriesShape