import { adminCookieName } from '../cookie';

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

export const attemptForward = async (req, res, forwardReq) => {
    try {
        await forwardReq(req, res)
    } catch (err) {
        if (err.response) {
            res.status(err.response.status)
            const hasJson = (
                err.response.headers["Content-Type"] ===
                "application/json"
            )
            if (hasJson) {
                res.json(err.response.data)
            } else {
                res.end()
            }
        } else {
            res.status(500).json(
                { error: err.message }
            )
        }
    }
}

export const getAuthHeader = (req) => {
    const token = req.cookies[adminCookieName]
    return { "Authorization": `Bearer ${token}`}
} 


export default generateApi