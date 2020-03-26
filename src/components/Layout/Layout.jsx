import PropTypes from 'prop-types'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import styles from './Layout.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ children }) => {
  const { content } = styles

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className={content}>{children}</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
