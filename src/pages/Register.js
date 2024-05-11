import { useState } from "react";
import { useNavigate } from "react-router";
import Step1Register from "./registrationSteps/Step1Register";
import Step2Register from "./registrationSteps/Step2Register";
import Step3Register from "./registrationSteps/Step3Register";
import Step4Register from "./registrationSteps/Step4Register";
import Step5Register from "./registrationSteps/Step5Register";

function Register({registerFunction}) {
    const navigate = useNavigate()
    const [step, setStep] = useState(1)
    const [userForm, setUserForm] = useState({
        username:'',
        email: '',
        phoneNumber: '',
        password:''})

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
    function nextStep(){
        setStep((prev)=> prev + 1)
    }
    function backStep(){
        setStep((prev)=> prev - 1)
    }
  return (
    <form onSubmit={handleSubmit} className="main_form">
        <h1 style={{ marginTop: '400px', color: 'white' }}>step{step}</h1>
        {step == 1 ? <Step1Register handleChange={handleChange} userForm={userForm}/>
        : step == 2 ? <Step2Register handleChange={handleChange} userForm={userForm}/>
        : step == 3 ? <Step3Register />
        : step == 4 ? <Step4Register />
        : <Step5Register />
        }
        {step>1 && <button type="button" onClick={backStep}>Back</button>}
        {step<5 ?
        <button type="button" onClick={nextStep}>Next</button>
        :
        <button type="submit">Submit</button>
        }
    </form>
  )
}

export default Register