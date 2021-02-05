import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './apps/header/header.js'
import Footer from './apps/footer/footer.js'
import PledgeSelect from './apps/pledgeSelect/pledgeSelect.js'
import PledgeResult from './apps/pledgeResult/pledgeResult.js'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div id='app'>
      <PledgeSelect />
      <PledgeResult />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
