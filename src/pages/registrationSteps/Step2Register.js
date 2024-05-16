
function Step2Register({handleChange, userForm}) {
  return (
    <div className="register2">
        <h1 className="number_tagline">To start using the app, please enter your phone number</h1>
        <input type="text" className="number_input" placeholder="phone number" onChange={handleChange} value={userForm.phoneNumber} name="phoneNumber"/>
    </div>
  )
}

export default Step2Register