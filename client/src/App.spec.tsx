import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import App from './App'

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
    const appContent = await cont.querySelectorAll('[class^="ant"]')
    await act(async () => expect(appContent.length).toBeGreaterThan(0))
  })

  it('Should show home(Início) button in the headear of the main page', async ()=>{
    const homeButton = await cont.querySelector('header > button[class*="inicio"]')
    await act( async () => expect(homeButton.innerHTML).toContain('Início'))
  })

  it('Should show contact(Contato) button in the headear of the main page', async ()=>{
    const homeButton = await cont.querySelector('header > button[class*="contato"]')
    await act( async () => expect(homeButton.innerHTML).toContain('Contato'))
  })

  it('Should show about(sobre) button in the headear of the main page', async ()=>{
    const homeButton = await cont.querySelector('header > button[class*="sobre"]')
    await act( async () => expect(homeButton.innerHTML).toContain('Sobre'))
  })

})
