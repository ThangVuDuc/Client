import axios from 'axios';
// import { ROOT_API } from "../static/index";;


export const uploadFile = (file) => {
    let config = {
        header: {
            Client_ID: '05b778b3d686546',
            Bearer: '6009219c3463ddf870a5e7ddc284294833a80d81'
        }
    }
    return axios.post(`https://api.imgur.com/3/image`, file, config);
}