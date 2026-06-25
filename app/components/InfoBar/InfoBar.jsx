import styles from "./InfoBar.module.css"

export default function InfoBar({ likes, price }) {

    return(
        <div className={styles.infoBar}>
            <p className={styles.likes}>
                <span>{likes}</span>
                <span aria-label='likes'>&#9829;</span>
            </p>
            <p className={styles.price}>
                {price}
                <span aria-label="euro">&#8364;</span>
                / jour
            </p>
        </div>
    )
}