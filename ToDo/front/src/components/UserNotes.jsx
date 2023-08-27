
import {useState, useEffect} from 'react'

function UserNotes() {

    const [userNotes, setUserNotes] = useState(new Array())

    useEffect(() => {
        console.log('aqui se realizara una llamada cada vez que cargue la aplicacion')
    }, [])

    return (
        <main>
            
        </main>
    )
}
export default UserNotes