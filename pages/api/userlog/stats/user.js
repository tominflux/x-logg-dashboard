const { default: generateApi, attemptForward, getAuthHeader } = require("../../../../misc/api");


const api = generateApi()


const forwardGet = async (req, res) => {
    const options = {
        headers: {
            ...getAuthHeader(req)
        }
    }
    const response = await api.get(
        "api/userlog/stats/user",
        options
    )
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