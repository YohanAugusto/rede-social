import React, { Component } from 'react'
import { Dashboard } from 'views'
import { Layout, PublicRoute } from 'components'

import './App.module.scss'

class App extends Component {
  render() {
    return (
      <Layout>
        {/* <PrivateRoute path='/' component={Account} /> */}
        <PublicRoute path='/' component={Dashboard} />
      </Layout>
    )
  }
}

export default App
