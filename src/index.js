import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import AppPage from './views/app-page'
import AppPage1 from './views/app-page1'
import AppPage2 from './views/app-page2'
import AppPage3 from './views/app-page3'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={AppPage} path="/app-page" />
        <Route exact component={AppPage1} path="/app-page1" />
        <Route exact component={AppPage2} path="/app-page2" />
        <Route exact component={AppPage3} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
