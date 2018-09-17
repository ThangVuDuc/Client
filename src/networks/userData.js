import axios from 'axios';
import { ROOT_API } from "../static/index";;


export const getUserById = (id) => {
    return axios.get(`${ROOT_API}/user/?userId=${id}`);
}
export const getUserByIdFb = (id) => {
    return axios.get(`${ROOT_API}/user/${id}`);
}
 