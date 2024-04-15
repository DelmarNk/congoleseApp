import { Route, Routes } from "react-router"
import Events from "../pages/Events"
import Show from "../pages/Show"
import Update from "../pages/Update"
import Create from "../pages/Create"


function Main() {
  return (
        <Routes>
            <Route path="/" element={<Events />}/>
            <Route path="/:id" element={<Show />}/>
            <Route path="/update/:id" element={<Update />}/>
            <Route path="/create/:id" element={<Create />} />
        </Routes>
  )
}

export default Main