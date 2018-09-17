import axios from 'axios';
import { ROOT_API } from "../static/index";;


export const getShopById = (id) => {
    return axios.get(`${ROOT_API}/shop/${id}`);
}
 
export const createShop = ({title, description, owner}) => {
    console.log({title, description, owner})
    return axios.post(`${ROOT_API}/shop`, {title, description, owner});
}

export const updateInfoShopByID = (id,{title, description, openOrClose, comments, productList, listOrder}) => {
    return axios.put(`${ROOT_API}/shop/${id}`, {title, description, openOrClose, comments, productList, listOrder});
}