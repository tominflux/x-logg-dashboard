

export const validateResponse = (response, operationTerm = "RESOURCE FETCH") => {
    if (!response.ok) {
        console.error("Failed Response", response)
        throw new Error(
            `${operationTerm} failed.`
        )
    }
    if (!response.headers.get("Content-Type").includes("application/json")) {
        console.error("Failed Response", response)
        throw new Error(
            `${operationTerm} did not return JSON.`
        )
    }
}