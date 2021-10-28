import { act } from 'react-dom/test-utils';
import Registration from '.'
import { render } from '../../utils/test-utils'

describe('Testing register page', () => {
  let cont: any = null
  beforeEach(async () => {
    await act(async ()=>{
      const { container } = render(<Registration />)
      cont = container
    })
  })
  afterEach(() => {
    return (cont = null)
  })

  it('should print on the screen label with text content Primeiro nome', () => {
    const label = cont.querySelector('[for="firstName"]')
    expect(label.innerText).toContain('Primeiro nome')
  })

  it('should print on the screen input with id = "firstName"', () => {
    const input = cont.querySelectorAll('input#firstName')
    expect(input.length).toBeGreaterThan(0)
  })
})
