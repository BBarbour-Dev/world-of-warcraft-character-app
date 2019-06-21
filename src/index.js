import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './components/app'
import Provider from './components/context-provider'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
