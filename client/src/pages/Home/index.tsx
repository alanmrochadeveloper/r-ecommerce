import React from 'react'
import Title from 'antd/lib/typography/Title'
// import axios from 'axios'
import { appName } from '../../utils/globals'
import MainWrapper from '../../layout/MainWrapper'
import ProductDetail from '../../components/ProductDetail'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import Block from '../../layout/Block'
// import { products, IProduct } from '../../utils/mock/products-mock'
import api, { EndPoints } from '../../api/axios'
import { getProductsAxios } from '../../services/ProductServices'
import { IProduct } from '../../models/product'


interface IProps { }
const Home: React.FC<IProps> = () => {
  const [state, setState] = React.useState<any>({})
  const [productsApi, setProductsApi] = React.useState<IProduct[]>();
  const history = useHistory()

  const getInitTestValue = React.useCallback(async () => {
    try {
      //const response = await axios(`${api}/init-test/test`) // TODO for testing purpose, should be removed later
      //const responseBr = await axios(`${api}/init-test/teste`)
      //const responseDatabase = await axios(`${api}/init-test/database`)
      const responseBr = await api(`${EndPoints.TEST}`);
      const responseDatabase = await api(`${EndPoints.TEST_DB}`)
      setState((prevState: any) => ({ ...prevState, test: responseBr.data, database: responseDatabase.data }))
    } catch (e) {
      console.log(`error = ${e}`)
    }
  }, [])

  const getProductsValue = React.useCallback(async () => {
    try {
      const { data } = await getProductsAxios();
      console.log(`response.data = ${JSON.stringify(data)}`);
      setProductsApi(data);
    }
    catch (e: any) {
      console.error(`Erro ao tentar capturar os valores de produtos da API = ${e.message}`)
    }
  }, [])

  React.useEffect(() => {
    getInitTestValue()
    return () => {
      setState(null)
    }
  }, [getInitTestValue])

  React.useEffect(() => {
    getProductsValue();
  }, [getProductsValue])

  return (
    <MainWrapper>
      <Title>{appName}-ECOMMERCE</Title>
      <div className="api-container"> API = {state.test}</div>
      <div className="db-container"> Database = {state.database}</div>
      <Title level={3}>Produtos</Title>
      <div className="produtos">
        {productsApi?.map(({ id, title, description, image, category }: IProduct) => (
          <Block>
            <div className={`produto ${title}`} key={id}>
              <ProductDetail product={{ id, title, description, image, category }} />
            </div>
          </Block>
        ))}
        <Button htmlType='button' type='ghost' onClick={() => { history.push('/dashboard/inicio') }} >
          ir para portal do cliente
        </Button>
      </div>
    </MainWrapper>
  )
}
export default Home
