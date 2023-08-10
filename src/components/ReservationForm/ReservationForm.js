import { useFormik } from 'formik'
import * as Yup from 'yup'
import styles from "./ReservationForm.module.css"

const ReservationForm = ({ availableTimes, dispatchDate, submitForm }) => {
    const formik = useFormik({
        initialValues: {
            date: '',
            time: '-',
            guestsNumber: '',
            occasion: '-'
        },
        onSubmit: (value) => {
            submitForm(value)
        },
        validationSchema: Yup.object({
            date: Yup.string()
                .required("Required"),
            time: Yup.string()
                .required("Required")
                .notOneOf(['-'], 'Required'),
            guestsNumber: Yup.number()
                .required("Required")
        })
    })

    const handleDate = (e) => {
        formik.handleChange(e)
        dispatchDate(e.target.value)
    }

    return (
        <section className={styles.formSection}>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input id="res-date" name="date" value={formik.values.date} type="date" onChange={handleDate} data-testid="date" />
                {
                    formik.touched.date
                    && formik.errors.date
                    && <div style={{ color: 'red' }}>{formik.errors.date}</div>
                }
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" name="time" value={formik.values.time} onChange={formik.handleChange} data-testid="time">
                    <option>-</option>
                    {availableTimes.map((time) => <option key={time}>{time}</option>)}
                </select>
                {
                    formik.touched.time
                    && formik.errors.time
                    && <div style={{ color: 'red' }}>{formik.errors.date}</div>
                }
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    id="guests"
                    name="guestsNumber"
                    value={formik.values.guestsNumber}
                    onChange={formik.handleChange}
                    data-testid="guests-number"
                />
                {
                    formik.touched.guestsNumber
                    && formik.errors.guestsNumber
                    && <div style={{ color: 'red' }}>{formik.errors.guestsNumber}</div>
                }
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" value={formik.values.occasion} onChange={formik.handleChange} data-testid="occasion">
                    <option>-</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button type="submit" style={{
                    padding: '7px 15px 7px 15px',
                    backgroundColor: '#f4ce14',
                    borderStyle: 'none',
                    borderRadius: '10px',
                    fontWeight: 'bold'
                }}>Make Your reservation</button>
            </form>
        </section >

    )
}

export default ReservationForm