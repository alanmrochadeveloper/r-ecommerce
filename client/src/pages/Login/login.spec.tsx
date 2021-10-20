import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Login from '.'

describe('Working with login screen', () => {
  const cssFramework = process.env.REACT_APP_CSS_FRAMEWORK

  global.matchMedia =
    global.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      }
    }

  it(`Should have this css frameword in the screen rendered = ${cssFramework}`, () => {
    const { container } = render(<Login />)
    const anyElementWithCssFramework = container.querySelectorAll(
      `[class*="${cssFramework}"]`,
    )
    act(() => {
      expect(anyElementWithCssFramework.length).toBeGreaterThan(0)
    })
  })

  it('Should print username label on screen with Nome do usuário inside', () => {
    const { container } = render(<Login />)
    const label = container.querySelector('label[for*="username"]')
    act(() => {
      expect(label?.innerHTML).toContain('Nome do usuário')
    })
  })

  it('Should print password label on screen with Senha inside', () => {
    const { container } = render(<Login />)
    const label = container.querySelector(`label[for*="password"]`)
    act(() => {
      expect(label?.textContent).toContain('Senha')
    })
  })

  it('Should print input in the screen with type="text"', () => {
    const { container } = render(<Login />)
    const input = container.querySelectorAll('input.username-input[type="text"]')
    act(() => {
      expect(input.length).toBeGreaterThan(0)
    })
  })

  it('Should print password in the screen with type="password"', () => {
    const { container } = render(<Login />)
    const input = container.querySelectorAll(
      'input[type="password"]',
    )
    act(() => {
      expect(input.length).toBeGreaterThan(0)
    })
  })
})
