import axios from 'axios';
import { ROOT_API } from "../static/index";;


export const getUserById = (id) => {
    console.log(id)
    return axios.get(`${ROOT_API}/user/info/${id}`);
}

export const getUserByIdFb = (id) => {
    return axios.get(`${ROOT_API}/user/${id}`);
}

export const updateUserById = (id, { name, email, avatarUrl, gender, shop, order }) => {
    return axios.put(`${ROOT_API}/user/${id}`, { name, email, avatarUrl, gender, shop, order });
}