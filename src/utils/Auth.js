const setUserToken = (token)=>{
    return localStorage.setItem('token', token)
}

const getUserToken = ()=>{
    return localStorage.setItem('token')
}

const clearUserToken = ()=>{
    return localStorage.setItem('token', '')
}

export{setUserToken, getUserToken, clearUserToken}