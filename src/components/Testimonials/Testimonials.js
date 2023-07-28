import styles from "./Testimonials.module.css"
import Star from '../../pictures/8fab66317d6c35dc211a165dbc3735e15466ae68.png'
import Portret1 from '../../pictures/3ca412176fe4306326b04a78b51fa148c49f99c1.jpg'
import Portret2 from '../../pictures/08c5772c481233a30a46aeca552132053604e2a8.jpg'
import Portret3 from '../../pictures/44dd2beb0c06094368ffbb7fa1843005cfdae174.jpg'
import Portret4 from '../../pictures/b64f988f077b50ffdab0afee9de4d701e4a9d5da.jpg'

const testimonialsList = [
    { portret: Portret1, name: 'Diego M', comment: '"Really enjoyed the atmosphere."' },
    { portret: Portret2, name: 'Glofira S', comment: '""The greek salad was excellent!""' },
    { portret: Portret3, name: 'Anna-Lisa K', comment: '"You have to try the Greek Salad!"' },
    { portret: Portret4, name: 'Jacky Ch.', comment: '"Awesome place with delicious food"' },
]

export const Testimonials = () => {
    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.sectionName}>
                <strong>Testimonials</strong>
            </div>
            <div className={styles.testimonials}>
                {testimonialsList.map(({ portret, name, comment }) => (
                    <div className={styles.testimonial}>
                        <div className={styles.stars}>
                            <img src={Star} alt={"star"} className={styles.star}></img>
                            <img src={Star} alt={"star"} className={styles.star}></img>
                            <img src={Star} alt={"star"} className={styles.star}></img>
                            <img src={Star} alt={"star"} className={styles.star}></img>
                            <img src={Star} alt={"star"} className={styles.star}></img>
                        </div>
                        <img src={portret} alt={"portret1"} className={styles.portret}></img>
                        <div className={styles.name}><strong>{name}</strong></div>
                        <div className={styles.comment}>{comment}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}