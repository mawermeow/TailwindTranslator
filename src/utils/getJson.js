import axios from "axios";
import {sourcePath} from "./path";

export const getJson=(path)=>{
    return axios.get(path.replace("./",sourcePath))
        .then(response => {
            const json = response.data
            // console.log(json)
            return json
        })
        .catch(error => {
            console.error('Error:', error)
        })
}