import { Button } from 'antd';
import Title from 'antd/lib/typography/Title'
import axios from 'axios'
import React from 'react'
import { api } from './utils/globals';

function App() {
  const [state, setState] = React.useState<any>({})

  const getInitTestValue = React.useCallback(async () => {
    try {
      console.log(`api = ${api}`) // TODO remove this log later
      const response = await axios(`${api}/init-test/test`)
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
        <Button type='primary' className="inicio">Início</Button>
        <Button type='primary' className="contato">Contato</Button>
        <Button type='primary' className="sobre">Sobre</Button>
      </header> {/* TODO to be replaced by a component in futures refactors */}
      <Title>ROCHA-ECOMMERCE: </Title>
      <div className="api-container"> API = {state.test}</div>
    </div>
  )
}

export default App
