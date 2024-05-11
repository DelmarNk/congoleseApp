
function Step1Register({handleChange, userForm}) {
  return (
    <input type="text" placeholder="username" onChange={handleChange} value={userForm.username} name="username"/>
  )
}

export default Step1Register