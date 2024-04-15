import { useState, useEffect } from "react"
import { Link, useParams, useNavigate} from "react-router-dom"
import './show.css'

function Show() {
  const {id} = useParams()
  const [event, setEvent] = useState(null)
  const URL = process.env.REACT_APP_API_URL + `event/${id}`
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
        <div className="eventShow">
          <div className="eventContainer">
            <h1 className="tilteShow">{event.title}</h1>
              <p className="contentShow">{event.content}</p>
              <img src={event.image} className="eventImg"/>
              <p className="locationShow">Location: {event.location}</p>
              <p className="timeShow">Time: {event.time}</p>
          </div>
          <div className="buttonsShow">
            <div className="createDelete">
              <button className="deleteEvent" onClick={deleteEvent}>delete</button>
              <Link to={`/update/${id}`}><button className="updateEvent">update</button></Link>
            </div>
            <Link to={`/`}><button className="home">back</button></Link>
            <Link to={`/create`}><button className="createEvent">+</button></Link> 
          </div>
        </div>
    )
}
return event ? loaded() : loading()

}

export default Show