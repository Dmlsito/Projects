import { useState, useEffect } from 'react'

export const useNotes = () => {

    const [userNotes, setUserNotes] = useState(new Array())

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/note/getUserNotes/${JSON.parse(localStorage.getItem("user")).user_id}`)
        .then(res => res.json())
        .then(res => {
            setUserNotes(res) 
        })
       
    }, [])

    return {userNotes}
   
}