import generateApi from '../../../misc/api'
import { adminCookieName } from '../../../misc/cookie'

const api = generateApi()

export default async (req, res) => {
    switch (req.method) {
        case "POST":
            try {
                //Extract token from request cookie.
                const token = req.cookies[adminCookieName]
                //Build and send new request to API server.
                const options = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
                await api.post(
                    "/admin/logout",
                    {},
                    options
                )
                //Build new response to client.
                res.end()
            } catch (err) {
                if (err.response) {
                    res.status(err.response.status)
                    res.json(err.response.data)
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