import PropTypes from 'prop-types'
import React from 'react'
import { Route } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
)

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  match: PropTypes.object,
}

export default PublicRoute
