import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Reservation from "./pages/Reservation"
import ConfirmedReservation from "./pages/ConfirmedReservation"

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/reservations' element={<Reservation />} />
      <Route path='/confirmedreservations' element={<ConfirmedReservation />} />
    </Routes>
  );
}

export default App;
