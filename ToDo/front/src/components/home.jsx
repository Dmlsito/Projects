import './home.css'
import { useState, useEffect, useRef} from 'react'
import Menu from './Menu'

const Home = () => {

    const [textAreaInfo, setTextAreaInfo] = useState(new Array())
    const [existInfo, setExistInfo] = useState(false)

    const textAreaRef = useRef(null)

    // LO UTILIZAREMOS MAS ADELANTE
    // const saveNote = () => {
        
    //     setTextAreaInfo(info => {
    //         return [...info, textAreaRef.current.value]
    //     })
    //     setExistInfo(true)

    //     insertNote()

    // }


    const insertNote = () => {
        let note = {'content': textAreaRef.current.value}
        fetch(`http://localhost:8080/api/v1/note/createNote/${JSON.parse(localStorage.getItem('user')).user_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note)
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })  
    }

    return (

       <div className='app'>
        
        <Menu />
            
            <h1 className='app-title'>Wellcome to TO DO</h1>

            <div className='main'>

                <main className='main-container'>
                
                        <div className='main-article-dateContainer'>
                            <h3>{`Dia -> ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}  `}</h3>
                        </div>
                        <div className='main-article-input'>
                            <textarea ref={textAreaRef} />
                        </div>

                        <button o nClick={insertNote}>Create note</button> 
                </main>

                <aside className='main-aside'>
                    <h2 className='main-aside-title'>Today's notes</h2>

                    { existInfo && 
                        <div className='main-aside-containerNotes'>
                      {textAreaInfo.map((infoNote, i) => (
                        <span key={i}>{infoNote}</span>
                      )) 
                      }</div>
                    }
                  
                </aside>
                
            </div>

        </div>
    )
}

export default Home