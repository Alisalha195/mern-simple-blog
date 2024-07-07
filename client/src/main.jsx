import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {PersistGate} from 'redux-persist/integration/react'

import {store, persistor} from "./redux/store";
import {Provider} from 'react-redux'

// import {BownerDashboardContextProvider} from "./context/BownerDashboardContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor} > 
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>,
)
