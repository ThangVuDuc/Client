import axios from 'axios';
import { ROOT_API } from "../static/index";;


export const getProductById = (id) => {
    return axios.get(`${ROOT_API}/product/${id}`);
} 