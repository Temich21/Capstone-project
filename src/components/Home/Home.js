import styles from "./Home.module.css"
import ReservePicture from '../../pictures/restauranfood.jpg'
import { Button } from "../Button/Button"
import { Specials } from "../Specials/Specials"

export const Home = () => {
    return (
        <main>
            <section className={styles.ReserveTable}>
                <div className={styles.ReserveTableContent}>
                    <div className={styles.ReserveTableInfo}>
                        <div className={styles.ReserveTableName}><strong>Little Lemon</strong></div>
                        <div className={styles.ReserveTableSecondName}><strong>Chicago</strong></div>
                        <div className={styles.ReserveTableText}>
                            <strong>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</strong>
                        </div>
                        <Button>Reserve a Table</Button>
                    </div>
                    <img src={ReservePicture} alt={"logo"} ></img>
                </div>
            </section>
            <section>
                <Specials sourse={ } name='Greek salad' />
            </section>
        </main>
    )
}