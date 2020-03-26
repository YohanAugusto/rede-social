import PropTypes from 'prop-types'
import React from 'react'
import { getToken } from 'utils'
import { Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getToken() ? <Component {...props} /> : handleNotAuthenticated(props.match.path)
    }
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  match: PropTypes.object,
}

const handleNotAuthenticated = path => {
  window.location.href = '/'
  return null
}

export default PrivateRoute
