
import { filterStateProps } from "../types"
import { useState } from "react"

export const useFilter = () => {
    
    const [filters, setFilters] = useState<filterStateProps>({
        state: {
          category: 'all',
          pagesAmount: 1000,
          name: ''
        }
      })

      const changePagesAmount = (e:React.FormEvent<HTMLInputElement>) => {
        setFilters((prevState: filterStateProps) => {
            return ({state: {
                category: prevState.state.category,
                pagesAmount: e.target.value,
                name: prevState.state.name
            }})
        })  
    }

    const chooseGenre = (e:React.FormEvent<HTMLInputElement>) => {
        setFilters((prevState: filterStateProps) => {
            return ({state: {
                category: e.target.value,
                pagesAmount: prevState.state.pagesAmount,
                name: prevState.state.name
            }})
        })
    }

    const changeName = (e:React.FormEvent<HTMLInputElement>) => {
        setFilters((prevState: filterStateProps) => {
            return ({state: {
                category: prevState.state.category,
                pagesAmount: prevState.state.pagesAmount,
                name: e.target.value
            }})
        })
    }



    return {filters, changePagesAmount, chooseGenre, changeName}
} 