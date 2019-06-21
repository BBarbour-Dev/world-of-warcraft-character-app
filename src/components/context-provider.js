import React, { createContext, useState } from 'react'

export const AppContext = createContext({})

const ContextProvider = ({ children }) => {
  const [charData, setCharData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  return (
    <AppContext.Provider
      value={{
        charData,
        setCharData,
        loading,
        setLoading,
        error,
        setError
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
