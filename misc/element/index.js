

export const isOrHasChild = (element, lookingFor) => {
    if (element === lookingFor) return true
    const children = [...element.children]
    for (const child of children) {
        if (isOrHasChild(child, lookingFor))
            return true
    }
    return false
}