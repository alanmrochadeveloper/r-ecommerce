import { act } from 'react-dom/test-utils';
import Registration from '.'
import { render } from '../../utils/test-utils';

global.matchMedia =
global.matchMedia ||
function () {
  return {
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }
}

describe('Testing register page', () => {
  let cont: any = null
  beforeEach(async () => {
      const { container } = render(<Registration />)
      cont = container
      return await cont
  })
  afterEach(() => {
    return (cont = null)
  })

  it('should print on the screen label with text content Primeiro nome', async () => {
    await act(async ()=> {
      const label = await cont.querySelector('[for="firstName"]')
      expect(label.innerHTML).toContain('Primeiro nome')
    })
  })

  it('should print on the screen input with id = "firstName"', async () => {
    await act(async ()=> {
    const input = await cont.querySelectorAll('input#firstName')
    expect(input.length).toBeGreaterThan(0)
    })
  })

  it('should print on the screen label with text content Sobrenome', async ()=>{
    await act(async()=>{
      const label = await cont.querySelector('[for="lastName"]')
      expect(label.innerHTML).toContain('Sobrenome')
    })
  })

  it('should print on the screen input with id = "lastName"', async ()=>{
    const input = await cont.querySelectorAll('input#lastName')
    expect(input.length).toBeGreaterThan(0)
  })
})
