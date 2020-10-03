import generateApi, { attemptForward, getAuthHeader } from '../../../../misc/api'

const api = generateApi()

const CATALOGG_STATS_URL = "api/catalogg/stats/catalogue"

const forwardGet = async (req, res) => {
    const options = {
        headers: {
            ...getAuthHeader(req)
        }
    }
    const response = await api.get(CATALOGG_STATS_URL, options)
    res.json(response.data)
}

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await attemptForward(req, res, forwardGet)
            break
        default:
            res.status(404).send()
            break
    }
}
