import axios from 'axios';
import { ROOT_API } from "../static/index";;


export const createSession = ({ owner, address, phoneNumber, orderList, note }) => {
    return axios.post(`${ROOT_API}/auth`,{ owner, address, phoneNumber, orderList, note });
} 
export const getSession = () => {
    return axios.get(`${ROOT_API}/auth`);
} 