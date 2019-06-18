import React from 'react'

const App = () => {
  const getCharacter = async () => {
    try {
      const tokenResponse = await fetch('https://us.battle.net/oauth/token', {
        body: 'grant_type=client_credentials',
        headers: {
          Authorization:
            'Basic YjlmOTYwZDMxMjU3NDBhYmFlNGIzYWNiOTBlNjM1NGM6eVhsalR2WDU0VUtLMXlWblBUTE1hWXR1VXZQTmpPRk0=',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST'
      })
      const tokenData = await tokenResponse.json()
      const bearerToken = tokenData.access_token
      const characterResponse = await fetch(
        'https://us.api.blizzard.com/wow/character/proudmoore/genrik?fields=stats&fields=items',
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'GET'
        }
      )
      const characterData = await characterResponse.json()
      console.log(characterData)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <h1>Test</h1>
      <button onClick={getCharacter}>Test</button>
    </div>
  )
}

export default App
