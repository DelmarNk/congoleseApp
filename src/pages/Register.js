import { useState } from "react";
import { useNavigate } from "react-router";

function Register({registerFunction}) {
    const navigate = useNavigate()
    const [userForm, setUserForm] = useState({username:'', password:''})

    function handleChange(event){
        setUserForm({...userForm, [event.target.name]:event.target.value})
    }

    async function handleSubmit(event){
        event.preventDefault()
        try{
            const response = await registerFunction(userForm)
            navigate('/')
        } catch(error){
            console.log(error)
            navigate('/login')
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        
    </form>
  )
}

export default Register