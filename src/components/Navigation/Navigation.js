import styles from "./Navigation.module.css"
import logo from '../../pictures/Logo%20.png'
import { Link } from "react-router-dom"

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'About', path: '/about' },
    { id: 3, title: 'Menu', path: '/menu' },
    { id: 4, title: 'Reservations', path: '/reservations' },
    { id: 5, title: 'Order Online', path: '/order-online' },
    { id: 6, title: 'Login', path: '/login' }
]

export const Navigation = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt={"logo"} ></img>
            </div>
            <nav>
                <ul className={styles.navigation}>
                    {navigation.map(({ id, title, path }) => (
                        <li key={id} className={styles.navigationElement}>
                            <Link to={path}><strong>{title}</strong></Link>
                        </li>
                    ))
                    }
                </ul>
            </nav>

        </header>
    )
}