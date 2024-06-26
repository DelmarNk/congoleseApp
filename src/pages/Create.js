import { useState } from "react"
import { useNavigate } from "react-router"

function Create() {
    const URL = process.env.REACT_APP_API_URL + 'event'
    const navigate = useNavigate()
    const [newForm, setForm] = useState({
        content: "",
        image: "",
        location: "",
        title: "",
        time: Date.now()
    })

    function handleChange(event){
        setForm({...newForm, [event.target.name]: event.target.value})
    }
   
    function handleSubmit(event){
        event.preventDefault()
        console.log(newForm)
        try{
            fetch(URL, {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newForm)
            }) 
            navigate('/')
            } catch(error){
                console.log(error)
        }
        setForm({
            content: "",
            image: "",
            location: "",
            title: "",
            time: Date
        })
    }
        return (
          <div className="createEvents">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="content" value={newForm.content} onChange={handleChange} name="content" />
              <input type="text" placeholder="image" value={newForm.image} onChange={handleChange} name="image" />
              <input type="text" placeholder="location" value={newForm.location} onChange={handleChange} name="location" maxLength={50} />
              <input type="text" placeholder="title" value={newForm.title} onChange={handleChange} name="title" maxLength={20}/>
              <input type="date" value={newForm.time} onChange={handleChange} name="time" />
              <button type="submit">Create event</button>
            </form>
          </div>
        ) 
}

export default Create