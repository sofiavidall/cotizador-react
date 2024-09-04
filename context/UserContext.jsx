
import React, { createContext, useState } from 'react'

export const userContext = createContext()

const UserContext = ({children}) => {
    const [userHistory, setUserHistory] = useState([])

    const addItem = (item) => {
      setUserHistory([...userHistory, item])

    }
  return (
    <userContext.Provider value={{userHistory, addItem}}>
      {children}
    </userContext.Provider>
  )
}

export default UserContext
