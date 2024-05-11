
function Step2Register({handleChange, userForm}) {
  return (
    <input type="text" placeholder="phone number" onChange={handleChange} value={userForm.phoneNumber} name="phoneNumber"/>
  )
}

export default Step2Register