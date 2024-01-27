import { render } from '@redwoodjs/testing/web'

import FunLayout from './FunLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FunLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FunLayout />)
    }).not.toThrow()
  })
})
