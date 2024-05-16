
function Step4Register({handleChange, userForm}) {
  return (
    <div className="register4">
        <h1 className="email_tagline">To start using the app, please enter your email adress</h1>
        <input type="text" placeholder="please enter your email" onChange={handleChange} value={userForm.email} name="email"/>
    </div>
  )
}

export default Step4Register