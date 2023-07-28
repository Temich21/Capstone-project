import { Navigation } from '../components/Navigation/Navigation'
import { Footer } from '../components/Footer/Footer'
import { ReservationForm } from '../components/ReservationForm/ReservationForm'
import { useState, useReducer } from "react"




function Reservation() {
    const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

    function updateTimes(state, selectedDate) {
        return selectedDate;
    }

    const [availableTimesR, dispatch] = useReducer(updateTimes, initializeTimes)

    const handleDateSelection = (date) => {
        dispatch(date);
    };

    return (
        <>
            <Navigation />
            <ReservationForm availableTimes={availableTimesR} initializeTimes={initializeTimes} onChangeFunction={handleDateSelection} />
            <Footer />
        </>
    );
}

export default Reservation;
