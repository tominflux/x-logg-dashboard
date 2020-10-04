import { validateResponse } from "../../../../../misc/requests"

export const getItemsUrl = (catId, colId) => (
    `/api/catalogue/${catId}/collections/${colId}/items`
)

export const getItems = async (catId, colId) => {
    const requestUrl = getItemsUrl(catId, colId)
    const response = await fetch(requestUrl)
    validateResponse(response, "ITEMS FETCH")
    const items = await response.json()
    return items
}