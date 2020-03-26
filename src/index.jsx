import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import React from 'react'
import ReactDOM from 'react-dom'
import { App } from 'views'
import { createBrowserHistory } from 'history'
import { PublicRoute } from 'components'
import { Router, Switch } from 'react-router-dom'

const customHistory = createBrowserHistory()
customHistory.listen(() => window.tracker.pageView())

ReactDOM.render(
  <Router history={customHistory}>
    <Switch>
      <PublicRoute path='/' component={App} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)
