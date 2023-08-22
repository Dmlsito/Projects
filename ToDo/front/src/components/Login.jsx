import './Login.css'
import { useRef } from 'react'

const Login = () => {

  const username = new useRef(null)
  const password = new useRef(null)

  const handleClick = async (e) => {
    const { error } = await fetch()
    e.preventDefault()
  }


  return(
    <main className='login'>
      <form className='login-form' action='/home' onSubmit={handleClick}>
      <h1>To doo</h1>
        <input placeholder='username' ref={username}></input>
        <input placeholder='password' ref={password}></input>
        <button type='submit'>Sign in</button>
      </form>
    </main>
  )
}

export default Login