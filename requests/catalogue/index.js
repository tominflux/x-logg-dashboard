import { validateResponse } from "../../misc/requests"

export const CATALOGUES_URL = "/api/catalogues"

export const getCatalogues = async () => {
    const response = await fetch(CATALOGUES_URL)
    validateResponse(response, "CATALOGUES FETCH")
    const catalogues = await response.json()
    return catalogues
}
