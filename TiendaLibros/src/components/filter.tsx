import './filters.css'
import { FaSearch } from "react-icons/fa";

const Filters = ({chooseGenre, changePagesAmount, changeName}) => {

    const changeAmount = (e:  React.FormEvent<HTMLInputElement>) => {
        changePagesAmount(e)
      
    }
    const chooseCategory = (e:  React.FormEvent<HTMLInputElement>) => {
        chooseGenre(e)
    }
    const changeBookName = (e: React.FormEvent<HTMLInputElement>) => {
        changeName(e)
    }

    const searchBooks = () => {
        console.log('buscando libros')
    }

    return (
        <div className='filters'>
            <div className='filters-containerSelect'>
                 <h2>Filtrar por paginas</h2>
                 <input type='range' max={2000} onChange={changeAmount} className='filters-containerSelect-input'></input>
            </div>
            <div className='filters-containerSelect'>
                <h2>Filtrar por genero</h2>
                <select onChange={chooseCategory} className='filters-select' defaultValue={'all'}>
                    <option >all</option>
                    <option>Fantasia</option>
                    <option>Ciencia ficcion</option>
                    <option>Zombies</option>
                    <option>Terror</option>
                </select>
            </div>
            <div className='filters-containerSelect'>
                <FaSearch onClick={searchBooks}/>
                <input type='search' placeholder='encuentra tu libro' className='filters-inputSearch' onChange={changeBookName}/>
            </div>
        </div>
    )
}

export default Filters