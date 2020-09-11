import styles from './x-row.module.css'

const XSummaryRow = (props) => {
    //Constants
    const { count, entityName, Icon } = props
    const suffix = (props.count > 1) ? "s" : ""
    const text = `${count} ${entityName}${suffix}`
    //
    const rowClass = (
        `row align-items-center ${styles["x-summary__row"]}`
    )
    const leftColClass = (
        `col-5 ${styles["x-summary__left-col"]}`
    )
    const rightColClass =(
        `col-7 ${styles["x-summary__right-col"]}`
    )
    //
    return (
        <div className={rowClass}>
            <div className={leftColClass}>
                <Icon size={48} />
            </div>
            <div className={rightColClass}>
                <span className="x-summary__span">
                    { text }
                </span>
            </div>
        </div>
    )
}

export default XSummaryRow