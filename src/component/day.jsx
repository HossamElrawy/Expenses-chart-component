import styles from "./day.module.css"

function Day (props) {
    const isToday = props.todayName.includes(props.day)
    return (
        <div className={styles.dayDiv}>
            <div className={styles.toHover}>
                <div className={styles.percentage}>
                    ${props.amount}
                </div>
                <div className={`${styles.colorDiv} ${isToday ? styles.today : ""}`} style={props.divStyle}>
                </div>
            </div>
            <p className={styles.day}>
                {props.day}
            </p>
        </div>
    )
}

export default Day