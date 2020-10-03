
export const conClass = (...classNames) => {
    let intClassName = classNames[0]
    for (let i = 1, limit = classNames.length; i < limit; i++) {
        const className = classNames[i]
        if (className)
            intClassName = intClassName + " " + className
    }
    const conClassName = intClassName
    return conClassName
}