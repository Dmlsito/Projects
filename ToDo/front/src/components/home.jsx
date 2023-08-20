import './home.css'
import { useState, useEffect, useRef} from 'react'

const home = () => {

    const [textAreaInfo, setTextAreaInfo] = useState(new Array())
    const [existInfo, setExistInfo] = useState(false)

    const textAreaRef = useRef(null)

    const saveNote = () => {
        
        setTextAreaInfo(info => {
            return [...info, textAreaRef.current.value]
        })
        setExistInfo(true)

    }

    return (

       <div className='provisional'>

            <header>
                <h1>To do</h1>
            </header>

            <div className='main'>

                <main className='main-container'>
                
                        <div className='main-article-dateContainer'>
                            <h3>{`Dia -> ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}  `}</h3>
                        </div>
                        <div className='main-article-input'>
                            <textarea ref={textAreaRef} />
                        </div>

                        <button onClick={saveNote}>Save note</button> 
                </main>

                <aside className='main-aside'>
                    <h2>Today's notes</h2>

                   

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

export default home