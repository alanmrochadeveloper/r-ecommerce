import { act } from 'react-dom/test-utils'
import Login from '.'
import { render } from '../../utils/test-utils'

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

  let cont: any = null

  beforeEach(async () => {
    await act(async () => {
      const { container } = render(<Login />)
      cont = container
    })

    return cont
  })

  it(`Should have this css frameword in the screen rendered = ${cssFramework}`, () => {
    const anyElementWithCssFramework = cont.querySelectorAll(
      `[class*="${cssFramework}"]`,
    )
    expect(anyElementWithCssFramework.length).toBeGreaterThan(0)
  })

  it('Should print username label on screen with Nome do usuário inside', () => {
    const label = cont.querySelector('label[for*="username"]')
    expect(label?.innerHTML).toContain('Nome do usuário')
  })

  it('Should print password label on screen with Senha inside', () => {
    const label = cont.querySelector(`label[for*="password"]`)
    expect(label?.textContent).toContain('Senha')
  })

  it('Should print input in the screen with type="text"', () => {
    const input = cont.querySelectorAll('input.username-input[type="text"]')
    expect(input.length).toBeGreaterThan(0)
  })

  it('Should print password in the screen with type="password"', () => {
    const input = cont.querySelectorAll('input[type="password"]')
    expect(input.length).toBeGreaterThan(0)
  })

  it("Should print button on the screen with text = 'Cadastrar'", () => {
    const buttom = cont.querySelector('button[class*="cadastrar"]')
    expect(buttom.textContent).toContain('Cadastrar')
  })
	it('should leave a image on the screen', ()=>{
		const buttom = cont.querySelector('button[class*="cadastro"')
		expect(buttom.length).toBeGreaterThan(0);
	})
})
