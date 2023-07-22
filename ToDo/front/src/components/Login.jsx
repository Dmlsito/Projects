import './Login.css'

const Login = () => {
  return(
    <main className='login'>
      <form className='login-form' action='/home' >
      <h1>To doo</h1>
        <input placeholder='username'></input>
        <input placeholder='password'></input>
        <button>Sign in</button>
      </form>
    </main>
  )
}

export default Login