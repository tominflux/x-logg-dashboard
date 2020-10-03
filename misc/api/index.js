import { adminCookieName } from '../cookie';

const axios = require('axios');

/*
const BASE_URL = (
    process.env.NODE_ENV === "production"
) ? process.env.API_SERVER : 'http://localhost:8000'
*/
// eslint-disable-next-line no-undef
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
    return { "Authorization": `Bearer ${token}` }
}

export const getAuthOptions = (req) => ({
    headers: { ...getAuthHeader(req) }
})

export const genForwarder = ({
    forwardPost = null,
    forwardGet = null,
    forwardPut = null,
    forwardDelete = null
}) => {
    const forwarder = async (req, res) => {
        switch (req.method) {
            case "POST":
                if (!forwardPost) {
                    res.status(404).end()
                    break
                }
                await attemptForward(req, res, forwardPost)
                break
            case "GET":
                if (!forwardGet) {
                    res.status(404).end()
                    break
                }
                await attemptForward(req, res, forwardGet)
                break
            case "PUT":
                if (!forwardPut) {
                    res.status(404).end()
                    break
                }
                await attemptForward(req, res, forwardPut)
                break
            case "DELETE":
                if (!forwardDelete) {
                    res.status(404).end()
                    break
                }
                await attemptForward(req, res, forwardDelete)
                break
            default:
                res.status(404).end()
                break
        }
    }
    return forwarder
}


export default generateApi