import axios from 'axios';
import { ROOT_API } from "../static/index";;


export const getProductById = (id) => {
    return axios.get(`${ROOT_API}/product/${id}`)
}

export const createProduct = ({ shopID, name, image, price }) => {
    return axios.post(`${ROOT_API}/product`,{ shopID, name, image, price });
}

export const updateProductById = (id, { name, image, price }) => {
    return axios.put(`${ROOT_API}/product/${id}`,{ name, image, price });
}
