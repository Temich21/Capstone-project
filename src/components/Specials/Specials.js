import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Specials = ({ sourse, name, price, text }) => {
    return (
        <article>
            <img src={sourse} alt={"logo"} ></img>
            <div>
                <div>{name}</div>
                <div>{`$ ${price}`}</div>
            </div>
            <div>{text}</div>
            <div>
                <div>Order a delivery</div>
                <FontAwesomeIcon icon="fa-sharp fa-solid fa-moped" />
            </div>
        </article>
    )
}