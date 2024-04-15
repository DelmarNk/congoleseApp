import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import './events.css'

function Events() {
    const [events, setEvent] = useState(null)
    const URL = process.env.REACT_APP_API_URL + 'event'
    function getEvent(){
        try{
            fetch(URL)
            .then((res)=> res.json())
            .then((data)=>setEvent(data))
        } catch(error){
            console.log(error)
        }
    } 
    useEffect(()=>{
        getEvent()
    },[])

    function loading(){
        return <section className="peopleList"><h1>Hold on a sec...
            <span>
                <img className="spinner" src="https://freesvg.org/img/1544764567.png" />
            </span>
         </h1>
        </section>
    }
    function loaded(){
        return (
            <div className="events">
                {events.map((event)=>(
                    <Link style={{ textDecoration: 'none', color: 'rgba(217, 217, 217, 1)' }} to={`/${event._id}`}>
                        <div className="event">
                            <h2 className="eventTitle">{event.title}</h2>
                            <img src={event.image} className="eventImage"/>
                            <p className="eventContent">{event.content}</p>
                            <p className="eventLocation">{event.location}</p>
                            <p className="eventTime">{event.time}</p>
                        </div>
                    </Link>
                ))}
            </div>
        )
    }
    return events ? loaded() : loading()
}

export default Events