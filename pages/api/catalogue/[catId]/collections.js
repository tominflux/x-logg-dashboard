import generateApi, { genForwarder, getAuthOptions } from '../../../../misc/api'

const api = generateApi()

const getCollectionUrl = (catId) => (
    `api/catalogue/${catId}/collections`
)

const forwardGet = async (req, res) => {
    const { catId } = req.query
    const options = getAuthOptions(req)
    const requestUrl = getCollectionUrl(catId)
    const response = await api.get(requestUrl, options)
    res.json(response.data)
}

export default genForwarder({
    forwardGet
})
