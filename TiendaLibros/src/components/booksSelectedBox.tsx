import { booksListProps, booksProps } from "../types"
import './booksSelectedBox.css'
import { FaBook } from "react-icons/fa";
import { useState } from 'react'
import { RiDeleteBin5Fill } from "react-icons/ri"

import { FcLikePlaceholder } from "react-icons/fc";

const BooksSelectedBox = ({booksSelected}: booksListProps) => {

    const [showMenu, setShowMenu] = useState<boolean>(false)

    return (
       <main className={!showMenu ? 'box': 'box fixed'}>
        <strong className="box-title">Lista deseados<FcLikePlaceholder onClick= {() => setShowMenu(!showMenu)} className='box-title-icon'/></strong>
            <ul className={!showMenu ? 'box-content': 'box-content box-content-appeared'}>
            
                {
                    booksSelected.map((info:booksProps) => {
                        return (
                            <li key={info.book.ISBN} className="box-content-container">
                                <img src={info.book.cover}/>
                                <div className="box-content-container-buttonContainers">
                                    <button className="box-content-container-button">Eliminar<RiDeleteBin5Fill /></button>
                                </div>
                            </li>     
                        )
                    })
                }
            </ul>
       </main>
    )
}

export default BooksSelectedBox