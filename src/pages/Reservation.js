import { Navigation } from '../components/Navigation/Navigation'
import { Footer } from '../components/Footer/Footer'
import { useReducer } from "react"
import { useNavigate } from 'react-router-dom'
import { submitAPI } from '../utils/fakeAPIs'
import React, { Suspense } from 'react'
import ReservationForm from "../components/ReservationForm/ReservationForm"
import { initializeTimes, updateTimes } from '../utils/timeFunctions'

// const ReservationForm = React.lazy(() => import("../components/ReservationForm/ReservationForm"))

function Reservation() {
    const navigate = useNavigate()

    const [
        availableTimes,
        dispatchOnDateChange
    ] = useReducer(updateTimes, [], initializeTimes);

    const submitForm = (formData) => {
        const response = submitAPI(formData);
        if (response) navigate('/confirmedreservations');
    }

    return (
        <>
            <Navigation />
            <ReservationForm
                availableTimes={availableTimes}
                dispatchDate={dispatchOnDateChange}
                submitForm={submitForm} />
            {/* <Suspense fallback={<div>Loading...</div>}>
                <ReservationForm
                    availableTimes={availableTimes}
                    dispatchDate={dispatchOnDateChange}
                    submitForm={submitForm} />
            </Suspense> */}
            <Footer />
        </>
    );
}

export default Reservation;
