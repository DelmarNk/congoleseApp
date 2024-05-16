
function Step5Register({handleChange, userForm}) {
  return (
    <div className="register5">
        <h1 className="password_tagline">Please enter your password</h1>
        <input className="password_input1" type="text" placeholder="please enter a password" onChange={handleChange} name="password"/>
        <input className="password_input2" type="text" placeholder="please your password again" onChange={handleChange} value={userForm.password} name="password"/>
    </div>
  )
}

export default Step5Register