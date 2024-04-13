import { useState, useEffect } from "react"
import { Link, useParams, useNavigate} from "react-router-dom"

function Show() {
  const {id} = useParams()
  const [event, setEvent] = useState(null)
  const URL = process.env.REACT_APP_API_URL + `event/${id}`
  console.log(URL)
  const navigate = useNavigate()
  function deleteEvent(){
    try{
      fetch(URL, {
        method: "DELETE"
      })
      navigate('/')
    } catch(error){
      console.log(error)
    }
  }
  function getEvent(){
    try{
      fetch(URL)
      .then((res)=>res.json())
      .then((data)=>setEvent(data))
    } catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getEvent()
  },[])

  function loading(){
    return (
      <section className="peopleList">
        <h1>Hold on a sec...</h1>
          <span>
              <img className="spinner" src="https://freesvg.org/img/1544764567.png" />
          </span>
      </section>
    )
  }
  function loaded(){
    return (
        <div className="event">
          <p>About this event</p>
          <div className="eventContainer">
            <p className="content">{event.content}</p>
            <img src={event.image} className="eventImg"/>
            <p className="location"></p>
            <h1>{event.title}</h1>
            <p className="time">{event.time}</p>
          </div>
          <button onClick={deleteEvent}>Delete Event</button>
          <Link to={`/create/${id}`}><button className="createEvent">+</button></Link> 
          <Link to={`/update/${id}`}><button className="updateEvent">Update</button></Link>
        </div>
    )
}
return event ? loaded() : loading()

}

export default Show