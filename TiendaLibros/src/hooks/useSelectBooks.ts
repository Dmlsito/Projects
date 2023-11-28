import { useState } from 'react'
import { booksListProps, booksProps } from '../types'

export const useSelectBooks = ({ library }: booksListProps) => {

    const [selectedBooks, setSelectedBooks] = useState<Array<booksProps>>([])
    
    const selectBook = (id) => {
 
         const bookSelected = library.filter(info => {
             return info.book.ISBN === id.target.id.toString()
         })
 
         setSelectedBooks(prevState => {
            
             let libroGuardado = false
             const arrayWithNewBooks = []
             if(prevState.length !== 0) {
             prevState.forEach(info => {

                 if(info.book.ISBN === bookSelected[0].book.ISBN){
                 libroGuardado = true
                 alert('este libro ya se ha guardado')
                 }

             })
             if(!libroGuardado){
                 arrayWithNewBooks.push(bookSelected[0])
                 alert('libro guardado con exito')          
             }
         } else arrayWithNewBooks.push(bookSelected[0])
         
         return prevState.concat(arrayWithNewBooks)
              
         })  
         
     }

     return { selectBook, selectedBooks}
}