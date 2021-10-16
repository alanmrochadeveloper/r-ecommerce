import axios from 'axios'
import React from 'react'

function App() {
  const [state, setState] = React.useState<any>({})

  const getInitTestValue = React.useCallback(async () => {
    try {
      const response = await axios('http://localhost:4001/init-test/test')
      console.log(`response = ${JSON.stringify(response.data)}`)
      setState((prevState: any) => ({ ...prevState, test: response.data }))
    } catch (e) {
      console.log(`error = ${JSON.stringify(e)}`)
    }
  }, [state])

  React.useEffect(() => {
    getInitTestValue()
  }, [])

  return (
    <div className="App">
      <div>ROCHA-ECOMMERCE: </div>
      <div> API = {state.test}</div>
    </div>
  )
}

export default App
