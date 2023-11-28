
export enum EVENTS {
    PUSHSTATE= 'pushstate',
    POPSTATE= 'popstate'
}

export const selectBook = (id) => {

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
    
    return prevState.concat(prueba)
         
    })  
    
}

export const navigate = (href) => {
    window.history.pushState({}, '', href)
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
} 