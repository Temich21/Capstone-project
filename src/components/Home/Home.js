import styles from "./Home.module.css"
import ReservePicture from '../../pictures/restauranfood.jpg'
import saladPicture from '../../pictures/d47e626abe72ff61d38b0578618f1a9019b0c018.jpg'
import bruchettaPicture from '../../pictures/bruchetta.png'
import lemonDessertPicture from '../../pictures/lemon dessert.jpg'
import { Button } from "../Button/Button"
import { Specials } from "../Specials/Specials"
import { Testimonials } from "../Testimonials/Testimonials"

const picturesSpecials = [
    {
        sourse: saladPicture,
        name: 'Greek salad',
        price: 12.99,
        text: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style teta cheese, ganished with crunchy garlic and rosemary croutons.'
    },
    {
        sourse: bruchettaPicture,
        name: 'Bruchetta',
        price: 5.99,
        text: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
    {
        sourse: lemonDessertPicture,
        name: 'Lemon Dessert',
        price: "5.00",
        text: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
]

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
                    <img src={ReservePicture} alt={"logo"} className={styles.ReserveTableImage}></img>
                </div>
            </section>
            <section className={styles.specialsSections}>
                <div className={styles.textOfSpecials}>
                    <h1><strong>This weeks specials!</strong></h1>
                    <div className={styles.buttonMenu}>
                        <Button>Online Menu</Button>
                    </div>
                </div>
                <div className={styles.specialsCard}>
                    {picturesSpecials.map(({ sourse, name, price, text }) => (
                        <Specials sourse={sourse} name={name} price={price} text={text} />
                    ))}
                </div>
            </section>
            <Testimonials />
        </main>
    )
}