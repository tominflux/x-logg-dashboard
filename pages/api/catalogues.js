import generateApi, { genForwarder, getAuthOptions } from '../../misc/api'

const api = generateApi()

const CATALOGUE_URL = "api/catalogues"

const forwardGet = async (req, res) => {
    const options = getAuthOptions(req)
    const response = await api.get(CATALOGUE_URL, options)
    res.json(response.data)
}

export default genForwarder({
    forwardGet
})