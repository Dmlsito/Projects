
import { useUser } from "../hooks/useUser"
import { navigate } from "../utils"
import './login.css'

const Login = () => {
    
    const { user, setInfoPassword, setInfoUsername } = useUser()
    
    const sigIn = (e: React.FormEvent<HTMLInputElement>) => {

        e.preventDefault()

        if(user.state.username !== '' && user.state.password !== '') {
            navigate('/home')
        } 
    }

    return (
        <main className="main">
            {/* <img src="../libro.png"/>  */}
            <h1>Bienvenido!!!</h1>
            <form className="main-login">
                <input name="Username" placeholder="username" onChange={setInfoUsername}></input>
                <input name="Password" placeholder="password" type='password' onChange={setInfoPassword}></input>
                <button onClick={sigIn}>iniciar sesion</button>
            </form>
        </main>
    )
}

export default Login