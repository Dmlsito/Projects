import './home.css'

const home = () => {

    return (
       <div className='provisional'>

            <header>
                <h1>To do</h1>
            </header>
            
            <div className='main'>
                <main className='main-container'>
                
                        <div className='main-article-dateContainer'>
                            <h3>Dia del mes</h3>
                        </div>
                        <div className='main-article-input'>
                            <textarea></textarea>
                        </div>
                    
                </main>

                <aside className='main-aside'>
                    <h2>Informacion adicional</h2>
                </aside>
            </div>

        </div>
    )
}

export default home