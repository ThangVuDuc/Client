import axios from 'axios';
import { ROOT_API } from "../static/index";;


export const getOrderById = (id) => {
    return axios.get(`${ROOT_API}/order/${id}`);
} 
export const createOrder = ({ owner, address, phoneNumber, orderList }) => {
    return axios.post(`${ROOT_API}/order`,{ owner, address, phoneNumber, orderList });
} 