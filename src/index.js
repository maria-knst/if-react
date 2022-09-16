import React from 'react'
import App from './components/App/App'
import { createRoot } from 'react-dom/client'


window.React = React


const element = document.getElementById('root')
const root = createRoot(element)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
