// REACT IMPORTS
import React from 'react'
import ReactDOM from 'react-dom'

// LOCAL APP IMPORTS
import './index.css'
import Home from './apps/home/home.js'
import Header from './apps/header/header.js'
import Footer from './apps/footer/footer.js'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div id='app'>
      <Home />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
