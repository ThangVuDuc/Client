import axios from 'axios';
import { ROOT_API } from "../static/index";;


export const getUserById = (id) => {
    return axios.get(`${ROOT_API}/user/?userId=${id}`);
}

export const getUserByIdFb = (id) => {
    return axios.get(`${ROOT_API}/user/${id}`);
}

export const getInfoUserById = (id) => {
    return axios.get(`${ROOT_API}/user/info/${id}`);
}

export const updateUserById = (id, { name, email, avatarUrl, gender, shop, order }) => {
    console.log(shop);
    return axios.put(`${ROOT_API}/user/${id}`, { name, email, avatarUrl, gender, shop, order });
}