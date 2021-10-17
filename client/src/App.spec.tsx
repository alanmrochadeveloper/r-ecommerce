import { render, waitFor } from '@testing-library/react'
import axios from 'axios'
import { useEffect } from 'react'
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
      expect(text?.innerHTML).toContain('API')
    })
  })

  it('Should have ant-* in the document, grant that antd is loaded', async () => {
    const appContent = await cont.querySelectorAll('[class^="ant"]')
    await act(async () => expect(appContent.length).toBeGreaterThan(0))
  })
})
