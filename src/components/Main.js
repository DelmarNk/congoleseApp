import { Route, Routes } from "react-router"
import Events from "../pages/Events"
import Show from "../pages/Show"
import Update from "../pages/Update"
import Create from "../pages/Create"
import LandingPage from "../pages/LandingPage"
import Register from "../pages/Register"
import Login from "../pages/Login"


function Main({handleRegister, handleLogin}) {
  return (
        <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/events" element={<Events />}/>
            <Route path="/:id" element={<Show />}/>
            <Route path="/update/:id" element={<Update />}/>
            <Route path="/create" element={<Create />} />
            <Route path="/register" element={<Register registerFunction={handleRegister}/>} />
            <Route path="/login" element={<Login loginFunction={handleLogin} />} />
        </Routes>
  )
}

export default Main