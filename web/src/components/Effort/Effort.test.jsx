import { render } from '@redwoodjs/testing/web'

import Effort from './Effort'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Effort', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Effort />)
    }).not.toThrow()
  })
})
