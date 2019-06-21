import React, { useContext } from 'react'
import { AppContext } from './context-provider'

import Search from './search'
import Character from './character'

const App = () => {
  const { charData, error } = useContext(AppContext)
  console.log(charData)
  return (
    <main>
      <Search />
      <Character char={charData} error={error} />
    </main>
  )
}

export default App
