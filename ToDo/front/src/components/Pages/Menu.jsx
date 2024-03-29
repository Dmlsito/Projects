import { navigate } from '../../utils/navigations'
import { Link } from '../Link'
import './Menu.css'

function Menu() {
    
    return (
        <main className='mainMenu'>
            <div className='mainMenu-containerItemList'>
                <div className='mainMenu-containerItemList-itemList'>
                    <Link to={'/userNotes'}>Tus notas</Link>
                    <Link to={'/profile'}>Detalles perfil</Link>
                    <button>??????</button>
                    <button>??????</button>
                </div>
            </div>
            <div className='mainMenu-containerProfile'>
                <img src='data:image/png;base64,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'></img>
            </div>
        </main>
    )
}

export default Menu