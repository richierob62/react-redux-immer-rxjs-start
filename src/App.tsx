import configureStore from './configureStore'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Provider>
    )
  }
}

export default App

// import * as React from 'react'
// import { Provider, Store } from 'react-redux'
// import { BrowserRouter } from 'react-router-dom'
// import App from 'App'
// import { AppState } from 'state'

// const Root = () => {
//   return (
//     <Provider store={store}>
//       <div>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </div>
//     </Provider>
//   )
// }

// export default Root
