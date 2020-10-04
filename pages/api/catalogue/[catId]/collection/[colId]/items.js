import generateApi, { genForwarder, getAuthOptions } from '../../../../../../misc/api'

const api = generateApi()

const getItemsUrl = (catId, colId) => (
    `api/catalogue/${catId}/collection/${colId}/items`
)

const forwardGet = async (req, res) => {
    const { catId, colId } = req.query
    const options = getAuthOptions(req)
    const requestUrl = getItemsUrl(catId, colId)
    const response = await api.get(requestUrl, options)
    res.json(response.data)
}

export default genForwarder({
    forwardGet
})
