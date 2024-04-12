import { useState,useEffect } from "react"

function Events() {
    const [events, setEvent] = useState(null)
    const URL = process.env.REACT_APP_API_URL + 'event'
    console.log(URL)
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
                    <div>
                        <h1>{event.title}</h1>
                        <img src={event.image} className="eventImage"/>
                        <p>{event.content}</p>
                        <p>{event.location} {event.time}</p>
                    </div>
                ))}
            </div>
        )
    }
    return events ? loaded() : loading()
}

export default Events