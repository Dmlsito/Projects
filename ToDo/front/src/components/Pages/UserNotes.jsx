
import {useState, useEffect} from 'react'
import { useNotes } from '../../hooks/useNotes'
import './UserNotes.css' 

function Button({note_id, deleteNote}) {
  
  return <button onClick={deleteNote}>Borrar</button>
}

function UserNotes() {

    const {userNotes} = useNotes() 

    const deleteNote = (note_id) => {
      console.log(note_id)
    }
   
    return (
        <main className='main'>
           <header className='main-header'>
                <h1>TUS NOTAS</h1>
           </header>
           <div className='main-containerNote'>
            {userNotes && userNotes.map(note => {
                return <div key={note.id_note} className='main-containerNote-note'>
                  <main className='main-containerNote-note-content'>
                    <span>{note.content}</span>
                  </main>
                  <aside className='main-containerNote-note-edit'>
                    <Button note_id={note.note_id} deleteNote={deleteNote}/>
                    <button>Editar</button>
                    <button>Favorito</button>
                  </aside>
                </div>
            })}
            </div>
        </main>
    )
}
export default UserNotes