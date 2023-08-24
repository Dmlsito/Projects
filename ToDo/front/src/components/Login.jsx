import './Login.css'

import Form from './Form'

const Login = ({navigate}) => {

  return(
    <main className='login'>
      <Form navigate={navigate}/>
    </main>
  )
} 


export default Login