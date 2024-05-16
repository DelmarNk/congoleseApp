import { useState } from "react"
import { useNavigate } from "react-router"
import './login.css';


function Login({loginFunction}) {
    const navigate = useNavigate()
    const [userForm, setUserForm] = useState({email:'', password: ''})
    
    function handleChange(event){
        setUserForm({...userForm, [event.target.name]: event.target.value})
    }
    async function handleSubmit(event){
        event.preventDefault()
        try{
            const response = await loginFunction(userForm)
            navigate('/events')
        }
        catch(error){
            console.log(error)
            navigate('/login')
        }
    }

  return (
    <form onSubmit={handleSubmit} className="login">
        <input type="text" required name="email" placeholder="enter your email" onChange={handleChange} value={userForm.email} />
        <input type="text" required name="password" placeholder="enter your password" onChange={handleChange} value={userForm.password} />
        <input type="submit" />
    </form>
  )
}

export default Login