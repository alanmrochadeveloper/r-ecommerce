import Title from 'antd/lib/typography/Title'
import axios from 'axios'
import React from 'react'

function App() {
  const [state, setState] = React.useState<any>({})

  const getInitTestValue = React.useCallback(async () => {
    try {
      const response = await axios('http://localhost:4001/init-test/test')
      setState((prevState: any) => ({ ...prevState, test: response.data }))
    } catch (e) {
      console.log(`error = ${JSON.stringify(e)}`)
    }
  }, [state])

  React.useEffect(() => {
    getInitTestValue()
    return () => {
      setState(null)
    }
  }, [])

  return (
    <div className="App">
      <header>
        <button className="home">home</button>
      </header>
      <Title>ROCHA-ECOMMERCE: </Title>
      <div className="api-container"> API = {state.test}</div>
    </div>
  )
}

export default App
