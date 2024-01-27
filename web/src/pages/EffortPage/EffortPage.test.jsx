import { render } from '@redwoodjs/testing/web'

import EffortPage from './EffortPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EffortPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EffortPage />)
    }).not.toThrow()
  })
})
