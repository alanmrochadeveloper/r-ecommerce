import React from 'react'
import Title from 'antd/lib/typography/Title'
import axios from 'axios'
import { api } from '../../utils/globals'
import MainWrapper from '../../layout/MainWrapper'

interface IProps {}
const Home: React.FC<IProps> = () => {
  const [state, setState] = React.useState<any>({})

  const getInitTestValue = React.useCallback(async () => {
    try {
      const response = await axios(`${api}/init-test/test`)
      setState((prevState: any) => ({ ...prevState, test: response.data }))
    } catch (e) {
      console.log(`error = ${JSON.stringify(e)}`)
    }
  }, [])

  React.useEffect(() => {
    getInitTestValue()
    return () => {
      setState(null)
    }
  }, [])

  return (
    <MainWrapper>
      <>
        <Title>ROCHA-ECOMMERCE: </Title>
        <div className="api-container"> API = {state.test}</div>
        <Title level={3}>Produtos</Title>
        <div className="produtos">
          {['produto1', 'produto2', 'produto3'].map((prod) => (
            <div className={`produto ${prod}`}>{prod.toString()}</div>
          ))}
        </div>
      </>
    </MainWrapper>
  )
}
export default Home
