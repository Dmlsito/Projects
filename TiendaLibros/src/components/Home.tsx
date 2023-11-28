
import BooksList from './booksList'
import { library } from '../mocks/books.json'
import Filters from './filter'
import {useMemo, useState} from 'react'
import { useFilter } from '../hooks/useFilter'
import BooksSelectedBox from './booksSelectedBox'
import { useSelectBooks } from '../hooks/useSelectBooks'


const Home = () => {
    
  const { chooseGenre, changePagesAmount, changeName, filters } = useFilter()
  
  const libraryFiltered = useMemo(() => library.filter((info) => {
    return (info.book.genre === filters.state.category || filters.state.category === 'all') && info.book.pages <= filters.state.pagesAmount && info.book.title.match(filters.state.name)
  }), [filters.state])

 
  return (
    <div className='app'>
      <h1>Tienda de libros</h1>
      <div className='app-filters'>
        <Filters chooseGenre = {chooseGenre} changePagesAmount = {changePagesAmount} changeName={changeName}/> 
      </div>
      <div className='app-listImages'>
         <BooksList library={libraryFiltered}/>
      </div>
      
     
    </div> 
  )
}

export default Home