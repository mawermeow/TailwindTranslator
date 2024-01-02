import axios from "axios";

export const getSheet=async (sheetId)=>{
    const sheetApi = "https://script.google.com/macros/s/AKfycbzjHGLAqoWV1Zb1zpFolwkfKssZ9_oJ6O1Hrq7CfJS4Z5iEGyeCbwZ0pYgh6lNcQo0t/exec?sheetId="
    return axios.get(`${sheetApi}${sheetId}`)
        .then(response => {
            const data = response.data;
            console.log(data);
            return data
        })
        .catch(error => {
            console.error('Axios error:', error);
            return {}
        });
}