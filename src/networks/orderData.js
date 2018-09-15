import axios from 'axios';
import { ROOT_API } from "../static/index";;


export const getOrderById = (id) => {
    return axios.get(`${ROOT_API}/order/${id}`);
}