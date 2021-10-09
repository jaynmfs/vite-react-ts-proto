import { render } from 'test-utils'

import App from './App'

describe('App', () => {
  it('should show one line text', () => {
    const { getByDataCy } = render(<App />)
    expect(getByDataCy('title')).toHaveTextContent(
      /Vite React TS \+ Jest \+ Testing Library/i
    )
  })
})
