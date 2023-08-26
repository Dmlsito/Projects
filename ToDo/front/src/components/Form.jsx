import './Login.css'
import { useRef, useState } from 'react'

const Form = ({navigate}) => {
 
    const [user, setUser] = useState({username: '', password: ''})
    const [errorLogin, setErrorLogin] = useState(null)
    const [showErrors, setShowErrors] = useState(false)
    const [userRegister, setUserRegister] = useState(null)
    
    const getUsername = (e) => {

        setUser( info => {
            return {
                username: e.target.value,
                password: info.password
            }
        })

    }

    const getPassword = (e) => {

        setUser( info => {
            return {
                username: info.username,
                password: e.target.value
            }
        })

    }
  
    const sigIn = (e) => {

        e.preventDefault()

        let userToCheck = {'username': user.username, 'password': user.password}
        
        fetch("http://localhost:8080/api/v1/user/checkUser", {
            method: "POST",   
            body: JSON.stringify(userToCheck),
            headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => res.json())
      .then(res => {
        navigate(res !== 0 ? '/home': '')
        if(res) {
            let userFinded = {'username': res.username, 'password': res.password, 'user_id': res.user_id}
            localStorage.setItem("user", JSON.stringify(userFinded))
        }else {
        setShowErrors(true)
        }
    })
        
    }

    const register = async (e) => {

        let userToCreate = { 'username': user.username, 'password': user.password }

        const idUser = await fetch("http://localhost:8080/api/v1/user/createUser", {
            method: "POST",   
            body: JSON.stringify(userToCreate),
            headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => res.json())

      setUserRegister(idUser ? true: false)
      if(idUser) {
        console.log('usuario creado')
      }

    }
  
    return (
        <form className='login-form'>
            <h1>To doo</h1>
            <input placeholder='username' onChange={getUsername} required="yes"></input>
            <input placeholder='password' onChange={getPassword} required="yes"></input>
            {showErrors && <span className='error'>Usuario incorrecto</span>}
            <button type='submit' onClick={sigIn}>Sign in</button>
            <button type='button' onClick={register}>Create user</button>
        </form> 
    )
}

export default Form