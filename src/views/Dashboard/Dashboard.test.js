import React from 'react'
import { Router } from 'react-router-dom'
import { mount } from 'enzyme'
import { createBrowserHistory } from 'history'
import { Dashboard } from 'views'

jest.mock('use-react-router')

describe('< Dashboard/>', () => {
  let component
  const customHistory = createBrowserHistory()
  describe('on open dashboard', () => {
    beforeEach(() => {
      component = mount(
        <Router history={customHistory}>
          <Dashboard />
        </Router>,
      )
      window.location.assign = jest.fn()
    })
    it('render a Dashboard', () => {
      expect(component).toHaveLength(1)
    })

    it('post not accept numbers', async () => {
      const value = '123456'
      const input = component.find('#postInput textarea')
      expect(input).toHaveLength(1)
      input.simulate('change', {
        target: { name: 'postInput', value },
      })
      const submitButton = component.find('#btnSubmitPost button')
      submitButton.simulate('submit')
      const inputNew = component.find('#postInput textarea')
      expect(inputNew.props().value).toBe('')
    })
    it('post accept letter', async () => {
      const value = 'hahahahaha ahahahha ahahahaha'
      const input = component.find('#postInput textarea')
      expect(input).toHaveLength(1)
      input.simulate('change', {
        target: { name: 'postInput', value },
      })
      const submitButton = component.find('#btnSubmitPost button')
      submitButton.simulate('submit')
      const inputNew = component.find('#postInput textarea')
      expect(inputNew.props().value).toBe(value)
    })
  })
})
