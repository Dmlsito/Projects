export interface booksProps {
book: {
    title: string,
    pages: number,
    genre: string,
    cover: string,
    synopsis: string,
    year: number,
    ISBN: string,
    author: {
        name: string,
        otherBooks: string
    }
}

}

export type filterStateProps = {
    state: {
        category: string,
        pagesAmount: number,
        name: string
    }
}

export type userStateProps = {
    state: {
        username: string,
        password: string
    }
}

export type routesProps = {
    routesArray:[
        {
            path: string,
            component: React.Component
        }
    ]
}

export interface booksListProps {
    library: booksProps[]
}
