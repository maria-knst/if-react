import React from 'react'
import App from './components/App/App'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import store from '../src/redux/store'

window.React = React

const element = document.getElementById('root')
const root = createRoot(element)

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
)
