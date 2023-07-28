import { useState } from "react"
import styles from "./ReservationForm.module.css"

export const ReservationForm = ({ availableTimes, initializeTimes, onChangeFunction }) => {
    const [date, setDate] = useState('')
    const [guestsNumber, setguestsNumber] = useState(1)
    const [occasion, setOccasion] = useState('-')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!date) {
            alert('Please provide a date')
            return
        }

        const obj = {
            date: date,
            reservationTime: availableTimes,
            guestsNumber: guestsNumber,
            occasion: occasion
        }

        console.log('Form was confirmed', obj)
    }

    return (
        <section className={styles.formSection}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label for="res-date">Choose date</label>
                <input value={date} type="date" id="res-date" onChange={(e) => setDate(e.target.value)} />
                <label for="res-time">Choose time</label>
                <select value={availableTimes} id="res-time" onChange={(e) => onChangeFunction(e.target.value)}>
                    {initializeTimes.map((time) => <option>{time}</option>)}
                    {/* <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option> */}
                </select>
                <label for="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guestsNumber} onChange={(e) => setguestsNumber(e.target.value)} />
                <label for="occasion" >Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} >
                    <option>-</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </section>

    )
}