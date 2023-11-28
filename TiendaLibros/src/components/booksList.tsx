import { booksListProps } from '../types'
import './booksList.css'
import { MdAddToPhotos } from "react-icons/md";
import { useSelectBooks } from '../hooks/useSelectBooks'
import BooksSelectedBox from './booksSelectedBox';

const BooksList = ({library}: booksListProps ) => {

    const { selectBook, selectedBooks} = useSelectBooks({library})

    return (
        <main className='pages'>
            <ul className='listImages'> 
            {library.map(info => { 
                return (
                    <li key={info.book.ISBN} className='listImages-book' >
                        <img src={info.book.cover}/>
                        {/* <Button ISBN = {info.book.ISBN} library2={library}/> */}
                        <button id={info.book.ISBN}  onClick={selectBook}>Seleccionar <MdAddToPhotos /></button>
                    </li>
                )
            })}
            </ul>
            <BooksSelectedBox booksSelected={selectedBooks}/>
        </main>
    )
        }       

export default BooksList