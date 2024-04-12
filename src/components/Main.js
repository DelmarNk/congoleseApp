import { Route, Routes } from "react-router"
import Events from "../pages/Events"
import Show from "../pages/Show"
import Update from "../pages/Update"

function Main() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Events />}/>
            <Route path="/:id" element={<Show />}/>
            <Route path="/update/:id" element={<Update />}/>
        </Routes>
    </div>
  )
}

export default Main