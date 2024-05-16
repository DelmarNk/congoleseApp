import { useState } from "react";
import { useNavigate } from "react-router";
import Step1Register from "./registrationSteps/Step1Register";
import Step2Register from "./registrationSteps/Step2Register";
import Step3Register from "./registrationSteps/Step3Register";
import Step4Register from "./registrationSteps/Step4Register";
import Step5Register from "./registrationSteps/Step5Register";
import './register.css';

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
            console.log(userForm)
            const response = await registerFunction(userForm)
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
    <form onSubmit={handleSubmit} className="register_form">
        <h1 style={{ marginTop: '400px', color: 'white' }}>step{step}</h1>
        {step == 1 ? <Step1Register handleChange={handleChange} userForm={userForm}/>
        : step == 2 ? <Step2Register handleChange={handleChange} userForm={userForm}/>
        : step == 3 ? <Step3Register handleChange={handleChange} userForm={userForm}/>
        : step == 4 ? <Step4Register handleChange={handleChange} userForm={userForm}/>
        : <Step5Register handleChange={handleChange} userForm={userForm}/>
        }
        {step>1 && <button type="button" onClick={backStep} className="registerBack">Back</button>}
        {step<5 ?
        <button type="button" onClick={nextStep} className="registerNext">Next</button>
        :
        <input type="submit" className="submitRegister" />
        }
    </form>
  )
}

export default Register