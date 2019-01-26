import App from './App'
import configureStore from './configureStore'
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'

const store = configureStore()

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Root
