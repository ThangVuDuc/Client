import axios from 'axios';
import { ROOT_API } from "../static/index";


export const uploadFile = (file) => {
    return axios.post(`${ROOT_API}/uploadfile`, file);
}