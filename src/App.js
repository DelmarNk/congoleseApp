import './App.css';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { setUserToken, getUserToken, clearUserToken } from './utils/Auth';

function App() {
  const baseUrl = process.env.REACT_APP_API_URL
  const [currentUser, setCurrentUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  async function registerUser(data){
    try{
      const URL = baseUrl + 'auth/register'
      const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{'Content-Type': 'application/json'}
      }
      const newUser = await fetch(URL, options)
      const parsedUser = await newUser.json()
      setUserToken(parsedUser.token)
      setCurrentUser(parsedUser.currentUser)
      setIsAuthenticated(parsedUser.loggedIn)
      return parsedUser
    } catch(error){
      console.log(error)
      clearUserToken()
      setIsAuthenticated(false)
    }
  }

 async function loginUser(data){
  try{
    const URL = baseUrl + 'auth/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    }
    const response = await fetch(URL, options)
    const parsedUser = await response.json()
    setUserToken(parsedUser.token)
    setCurrentUser(parsedUser.currentUser)
    setIsAuthenticated(parsedUser.loggedIn)
    return parsedUser
  } catch(error){
    clearUserToken()
    setIsAuthenticated(false)
  }
 }

 async function getUser(){
  const token = getUserToken()
  try{
    if(token){
      const user = jwtDecode(token)
      const URL = baseUrl + `auth/login/:${user.id}`
      const options = {headers: {'Authorization': `Bearer ${token}`}}
      const response = await fetch(URL, options)
      const foundUser = await response.json()
      setCurrentUser(foundUser)
      setIsAuthenticated(true)
    } else{
      setCurrentUser(null)
      setIsAuthenticated(false)
    }
  } catch(error){
    console.log(error)
  }
 }

 function logOut(){
  clearUserToken()
  setCurrentUser(null)
  setIsAuthenticated(false)
 }
 useEffect(()=>{
  getUser()
 },[currentUser?._id])

  return (
    <div className="App">
      
      <Main 
        handleLogin={loginUser}
        handleRegister={registerUser}
        handleLogout={logOut}
        isAuthenticated={isAuthenticated}
        currentUser={currentUser}
        getUser={getUser}
      />
    </div>
  );
}

export default App;
