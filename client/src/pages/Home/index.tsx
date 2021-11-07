import React from 'react'
import Title from 'antd/lib/typography/Title'
import axios from 'axios'
import { api, appName } from '../../utils/globals'
import MainWrapper from '../../layout/MainWrapper'
import ProductDetail from '../../components/ProductDetail'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import Block from '../../layout/Block'
import { products, Product } from '../../utils/mock/products-mock'


interface IProps { }
const Home: React.FC<IProps> = () => {
  const [state, setState] = React.useState<any>({})
  const history = useHistory()
  const getInitTestValue = React.useCallback(async () => {
    try {
      //	const response = await axios(`${api}/init-test/test`) // TODO for testing purpose, should be removed later
      const responseBr = await axios(`${api}/init-test/teste`)
      const responseDatabase = await axios(`${api}/init-test/database`)
      setState((prevState: any) => ({ ...prevState, test: responseBr.data, database: responseDatabase.data }))
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
      <Title>{appName}-ECOMMERCE</Title>
      <div className="api-container"> API = {state.test}</div>
      <div className="db-container"> Database = {state.database}</div>
      <Title level={3}>Produtos</Title>
      <div className="produtos">
        {products.map(({ id, title, description, image, category }: Product) => (
          <Block>
            <div className={`produto ${title}`} key={id}>
              <ProductDetail product={{ id, title, description, image, category }} />
            </div>
          </Block>
        ))}
        <Button htmlType='button' type='ghost' onClick={() => { history.push('/dashboard') }} >
          ir para portal do cliente
        </Button>
      </div>
    </MainWrapper>
  )
}
export default Home
