import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

jest.mock('utils/token', () => ({
  getToken: () => 'development_shared_cookie=Bearer 123',
}))

test('Aplicação renderizada', () => {
  const component = shallow(<App />)
  expect(component).toBeDefined()
})
