import axios from 'axios';
import { ROOT_API } from "../static/index";


export const uploadFile = (file) => {
    console.log()
    return axios.post(`${ROOT_API}/uploadfile`, file);
}