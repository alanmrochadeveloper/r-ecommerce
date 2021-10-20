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

  it(`Should have this css frameword in the screen rendered = ${cssFramework}`, async () => {
    const { container } = render(<Login />)
    const anyElementWithCssFramework = container.querySelectorAll(
      `[class*="${cssFramework}"]`,
    )
    await act(async () => {
      expect(anyElementWithCssFramework.length).toBeGreaterThan(0)
    })
  })

  it('Should print username label on screen with Nome do usuário inside', async () => {
    const { container } = render(<Login />)
    const label = container.querySelector('label[for*="username"]')
    await act(async () => {
      expect(label?.innerHTML).toContain('Nome do usuário')
    })
  })

  it('Should print password label on screen with Senha inside', async () => {
    const { container } = render(<Login />)
    const label = container.querySelector(`label[for*="password"]`)
    await act(async() => {
      expect(label?.textContent).toContain('Senha')
    })
  })

  it('Should print input in the screen with type="text"', async () => {
    const { container } = render(<Login />)
    const input = container.querySelectorAll('input.username-input[type="text"]')
    await act(async () => {
      expect(input.length).toBeGreaterThan(0)
    })
  })

  it('Should print password in the screen with type="password"', async () => {
    const { container } = render(<Login />)
    const input = container.querySelectorAll(
      'input[type="password"]',
    )
    await act(async () => {
      expect(input.length).toBeGreaterThan(0)
    })
  })
})
