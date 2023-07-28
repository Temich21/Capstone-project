// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./Specials.module.css"

export const Specials = ({ sourse, name, price, text }) => {
    return (
        <article>
            <img src={sourse} alt={"logo"} ></img>
            <div className={styles.nameAndPrice}>
                <div><strong>{name}</strong></div>
                <div className={styles.price}>{`$${price}`}</div>
            </div>
            <div className={styles.text}>{text}</div>
            <div className={styles.order}><strong>Order a delivery</strong></div>
            {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-moped" /> */}
        </article>
    )
}