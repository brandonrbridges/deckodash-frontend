import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import dotenv from 'dotenv'
import * as serviceWorker from './serviceWorker'

import './assets/scss/style.scss'

dotenv.config()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
