const axios = require('axios');

/*
const BASE_URL = (
    process.env.NODE_ENV === "production"
) ? process.env.API_SERVER : 'http://localhost:8000'
*/
const BASE_URL = process.env.API_SERVER

const generateApi = () => {
    return axios.create({
        baseURL: BASE_URL,
    })
}

export default generateApi