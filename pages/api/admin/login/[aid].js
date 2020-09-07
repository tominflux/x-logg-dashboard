const { serialize } = require('cookie')
import generateApi from '../../../../misc/api';
import { 
    adminCookieName,
    cookieOptions 
} from '../../../../misc/cookie'

const api = generateApi()

export default async (req, res) => {
    switch (req.method) {
        case "POST":
            //Extract required information from request.
            const aid = req.query.aid
            const password = req.body.password
            //Build and send new request to API server.
            try {
                const response = await api.post(
                    `/admin/login/${aid}`,
                    { password }
                )
                //Extract necessary information from response.
                const { token } = response.data
                //Build cookie containing token.
                const cookie = serialize(
                    adminCookieName, 
                    token, 
                    cookieOptions
                )
                //Send back new response to client with cookie.
                res.setHeader('Set-Cookie', [cookie])
                res.end()
            } catch (err) {
                if (err.response) {
                    res
                    .status(err.response.status)
                    .json(err.response.data)
                } else {
                    res.status(500).send()
                }
            }
            break
        default:
            res.status(404).send()
            break
    }
}