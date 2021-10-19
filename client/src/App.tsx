import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import './App.css'

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </div>
)

export default App
