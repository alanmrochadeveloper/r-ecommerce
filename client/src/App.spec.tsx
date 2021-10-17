import { render } from '@testing-library/react'
import App from './App'

describe('Checking App Component', () => {
  it('should show API on the screen', () => {
    const { container } = render(<App />)
    const text = container.querySelector('.api-container')
    expect(text?.innerHTML).toContain('API')
  })
})
