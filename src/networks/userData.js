import axios from 'axios';
import { ROOT_API } from "../static/index";;


export const getUserById = (id) => {
    return axios.get(`${ROOT_API}/user/${id}`);
}

export const getUserByIdFb = (id) => {
    return axios.get(`${ROOT_API}/user/${id}`);
}

export const addShopByUser = (id, shop) => {
    axios.get(`${ROOT_API}/user/${id}`)
        .then(userFound => {
            console.log(userFound)
        })
}