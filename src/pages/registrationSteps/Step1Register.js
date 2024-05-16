
function Step1Register({handleChange, userForm}) {
  return (
    <div className="register1">
        <h1 className="name_tagline">To start using the app, please enter your name</h1>
        <input type="text" className="name_input" placeholder="please enter your name" onChange={handleChange} value={userForm.username} name="username"/>
    </div>
  )
}

export default Step1Register