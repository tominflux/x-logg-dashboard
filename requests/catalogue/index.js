
export const CATALOGUES_URL = "/api/catalogues"

export const getCatalogues = async () => {
    const response = await fetch(CATALOGUES_URL)
    if (!response.ok) {
        console.error("Failed Response", response)
        throw new Error("Could not fetch catalogues.")
    }
    if (!response.headers.get("Content-Type").includes("application/json")) {
        console.error("Failed Response", response)
        throw new Error("Catalogues fetch did not return JSON.")
    }
    const catalogues = await response.json()
    return catalogues
}
