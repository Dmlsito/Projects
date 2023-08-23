import './Login.css'
import { useRef, useState } from 'react'

const Login = () => {

  const username = new useRef()
  const password = new useRef()

  const [errorLogin, setErrorLogin] = useState(null)
  const [showErrors, setShowErrors] = useState(false)

  const checkUser =  async () => {
   let user = {'username': username.current.value, 'password': password.current.value}
   const error = await fetch("http://localhost:8080/api/v1/user/checkUser", {
    method: "POST",   
    body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())

    setErrorLogin(error !== 0 ? false: true)
  }

  const handleClick = (e) => {
    if(errorLogin) {
      e.preventDefault()
      setShowErrors(true)
  }
}

  return(
    <main className='login'>
      <form className='login-form' action='/home' onSubmit={handleClick}>
      <h1>To doo</h1>
        <input placeholder='username' ref={username} required="yes" onBlur={checkUser}></input>
        <input placeholder='password' ref={password} required="yes" onBlur={checkUser}></input>
        {showErrors && <span className='error'>Usuario incorrecto</span>}
        <button type='submit'>Sign in</button>
      </form>
    </main>
  )
}


export default Login