import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/reservations' element={<Reservation />} />
    </Routes>
  );
}

export default App;
