import XSummaryRow from "./row"
import styles from './x-summary.module.css'


const XSummary = (props) => {
    //Getters
    const getRows = () => props.rows.map(
        (row) => <XSummaryRow {...row} />
    )
    //Render
    return (
        <div className={styles["x-summary"]}>
            <div className={styles["x-summary__inner"]}>
                { getRows() }
            </div>
        </div>
    )
}

export default XSummary