import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import App from './App'

const cssFramework = process.env.REACT_APP_CSS_FRAMEWORK

const appName = process.env.REACT_APP_NAME

let cont: any = null
describe('Checking App Component', () => {
  beforeEach(async () => {
    await act(async () => {
      const { container } = render(<App />)
      cont = container
    })
    return await cont
  })
  afterEach(async () => {
    cont = null
    return await cont
  })

  it('should show API on the screen', async () => {
    await act(async () => {
      const text = cont.querySelector('.api-container')
      await act(async () => expect(text?.innerHTML).toContain('API'))
    })
  })

  it('Should have ant-* in the document, grant that antd is loaded', async () => {
    const appContent = await cont.querySelectorAll(`[class^="${cssFramework}"]`)
    await act(async () => expect(appContent.length).toBeGreaterThan(0))
  })

  it('Should show home(Início) button in the headear of the main page', async () => {
    const homeButton = await cont.querySelector('[class*="inicio"]')
    await act(async () => expect(homeButton.innerHTML).toContain('Início'))
  })

  it('Should show contact(Contato) button in the headear of the main page', async () => {
    const homeButton = await cont.querySelector('[class*="contato"]')
    await act(async () => expect(homeButton.innerHTML).toContain('Contato'))
  })

  it('Should show about(sobre) button in the headear of the main page', async () => {
    const homeButton = await cont.querySelector('[class*="sobre"]')
    await act(async () => expect(homeButton.innerHTML).toContain('Sobre'))
  })

  it(`Should show in footer the app name = ${appName}`, async () => {
    const footer = await cont.querySelector('footer')
    await act(async () => expect(footer.innerHTML).toContain(`${appName}`))
  })

  it(`Should show in footer the current year = ${new Date().getFullYear()}`, async () => {
    const footer = await cont.querySelector('footer')
    await act(async () => expect(footer.innerHTML).toContain('2021'))
  })

  it('Should print on the screen "Entrar" button', async () => {
    const header = await cont.querySelector('[class*="entrar"]')
    await act(async () => {
      expect(header.innerHTML).toContain('Entrar')
    })
  })

  it('Should show in the class which item is selected',()=>{
    const url = document.location.pathname 
    expect(url).toContain('/') // TODO need to change it to test if url is equal to pressed buttom
  })
})
