import {useState} from 'react'
import { userStateProps } from '../types'

export const useUser = () => {

    const [user, setUser] = useState<userStateProps>({
        state: {
            username: '',
            password: ''
        }
    })

    const setInfoUsername = (e: React.FormEvent<HTMLInputElement>) => {
        setUser((prevState: userStateProps) => {
            return ({
                state: {
                    username: e.target.value,
                    password: prevState.state.password
                }
            })
        })
    }

    const setInfoPassword = (e: React.FormEvent<HTMLInputElement>) => {
        setUser((prevState: userStateProps) => {
            return ({
                state: {
                    username: prevState.state.username,
                    password: e.target.value
                }
            })
        })
    }

    return { user, setInfoPassword, setInfoUsername }


}