import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"

function Update() {
  const [newForm, setForm] = useState(null)
  const {id} = useParams()
  const URL = process.env.REACT_APP_API_URL + `event/${id}`
  const navigate = useNavigate()

  function handleChange(event){
    setForm({...newForm, [event.target.name]: event.target.value})
  }

  function updateEvent(){

    try{
      fetch(URL, {
        method: 'PUT',
        body: JSON.stringify(newForm),
        headers: {"Content-Type": "application/json"}
      })
      navigate(`/`)
    } catch(error){
      console.log(error)
    }
  }

  function getEvent(){
    try{
      fetch(URL)
      .then((res)=>res.json())
      .then((data)=>setForm(data))
    } catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getEvent()
  },[])

  function loading(){
    return (
      <section className="loading">
        <h1>Hold on a sec...</h1>
          <span>
              <img className="spinner" src="https://freesvg.org/img/1544764567.png" />
          </span>
      </section>
    )
  }
  function loaded(){
    return (
      <div className="updateEvent">
        <form onSubmit={updateEvent}>
          <input type="text" placeholder="content" value={newForm.content} onChange={handleChange} name="content" />
          <input type="text" placeholder="image" value={newForm.image} onChange={handleChange} name="image" />
          <input type="text" placeholder="location" value={newForm.location} onChange={handleChange} name="location" maxLength={50} />
          <input type="text" placeholder="title" value={newForm.title} onChange={handleChange} name="title" maxLength={20} />
          <input type="date" value={newForm.time} onChange={handleChange} name="time" />
          <button type="submit">update changes</button>
        </form>
      </div>
    )
  }
  return newForm ? loaded(): loading() 
}

export default Update