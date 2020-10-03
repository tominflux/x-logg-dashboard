import { validateResponse } from "../../../misc/requests"

export const getCollectionsUrl = (catId) => (
    `/api/catalogue/${catId}/collections`
)

export const getCollections = async (catId) => {
    const requestUrl = getCollectionsUrl(catId)
    const response = await fetch(requestUrl)
    validateResponse(response, "COLLECTIONS FETCH")
    const collections = await response.json()
    return collections
}