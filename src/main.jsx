import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ShopContextProvider from './Context/ShopContex.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
    

)
