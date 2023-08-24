import './Login.css'
import { useRef, useState } from 'react'

const Form = ({navigate}) => {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const [errorLogin, setErrorLogin] = useState(null)
    const [showErrors, setShowErrors] = useState(false)
    const [userRegister, setUserRegister] = useState(null)
  
    const checkUser =  async () => {

        console.log(errorLogin)
        let user = {'username': username, 'password': password}
        const error = await fetch("http://localhost:8080/api/v1/user/checkUser", {
            method: "POST",   
            body: JSON.stringify(user),
            headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => res.json())
      .then(res => {
        if(res === 1) {
            navigate('/home')
        }
        else {
            console.log('usuario erroneo')
        }
      })

    }
  
    const sigIn = (e) => {
        e.preventDefault()
        checkUser()
        
    }

    const register = async (e) => {

        const idUser = await fetch("http://localhost:8080/api/v1/user/createUser", {
            method: "POST",   
            body: JSON.stringify(user),
            headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => res.json())

      setUserRegister(idUser ? true: false)

        
    }
  
    return (
        <form className='login-form'>
            <h1>To doo</h1>
            <input placeholder='username' onChange={e => setUsername(e.target.value)} required="yes"></input>
            <input placeholder='password' onChange={e => setPassword(e.target.value)} required="yes"></input>
            {showErrors && <span className='error'>Usuario incorrecto</span>}
            <button type='submit' onClick={sigIn}>Sign in</button>
            <button type='button'>Create user</button>
        </form> 
    )
}

export default Form