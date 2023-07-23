import logo from '../../pictures/Logo%20.png'
import styles from "./Footer.module.css"

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'About', path: '/about' },
    { id: 3, title: 'Menu', path: '/menu' },
    { id: 4, title: 'Reservations', path: '/reservations' },
    { id: 5, title: 'Order Online', path: '/order-online' },
    { id: 6, title: 'Login', path: '/login' }
]

const adressList = ['Adress', 'Phone number', 'Email']

export const Footer = () => {
    return (
        <footer className={styles.footerElement}>
            <div className={styles.footer}>
                <div className={styles.logo}>
                    <img src={logo} alt={"logo"} ></img>
                </div>
                <nav>
                    <ul className={styles.navigation}>
                        <li className={styles.boldText}><strong>Navigation</strong></li>
                        {navigation.map(({ id, title, path }) => (
                            <li key={id} className={styles.navigationElement}>
                                {title}
                            </li>
                        ))
                        }
                    </ul>
                </nav>
                <ul className={styles.navigation}>
                    <li className={styles.boldText}><strong>Contact</strong></li>
                    {adressList.map((name, id) => (
                        <li key={id} >
                            {name}
                        </li>
                    ))
                    }
                </ul>
                <ul className={styles.navigation}>
                    <li className={styles.boldText}><strong>Social Media</strong></li>
                    {adressList.map((name, id) => (
                        <li key={id} >
                            {name}
                        </li>
                    ))
                    }
                </ul>
            </div>
        </footer>
    )
}