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
        return <section className="loading"><h1>Hold on a sec...
            <span>
                <img className="spinner" src="https://freesvg.org/img/1544764567.png" />
            </span>
         </h1>
        </section>
    }
    function loaded(){
        return (
            <div className="feedPage">
                <div className='header'>
                    <div className='headContent'>
                    <h1 className='appName'>CCN</h1>
                    </div>
                    <hr style={{borderColor: 'black'}}/>
                </div>
                <div className="events">
                    {events.map((event)=>(
                        <Link style={{ textDecoration: 'none', color: 'rgba(217, 217, 217, 1)' }} to={`/${event._id}`}>
                            <div className="event">
                                <h2 className="eventTitle" style={{ width: '68%', position: 'relative', fontWeight: '10', fontSize: '25px', color: 'rgba(217, 217, 217, 0.8)'  }}>{event.title}</h2>
                                <div className="mid">
                                    <p className="eventContent">{event.content}</p>
                                    <img src={event.image} className="eventImage"/>
                                </div>
                                <div className="eventHappen">
                                    <p className="eventLocation">{event.location}</p>
                                    <p className="eventTime">{new Date(event.time).toDateString()}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
    return events ? loaded() : loading()
}

export default Events