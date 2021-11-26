import axios from 'axios';
import React from 'react'
import { CategoryEndpoints, ProductEndpoints } from '../../api/axios';
import Block from '../../layout/Block';
import MainWrapper from '../../layout/MainWrapper';
import { baseApiUrl } from '../../utils/globals';
import { Status } from './style';

interface IProps {
}

const TestApi: React.FC<IProps> = () => {

  const [apiStatus, setApiStatus] = React.useState<any>();
  const [productsApiStatus, setProductsApiStatus] = React.useState<any>();
  const [categoriesApiStatus, setCategoriesApiStatus] = React.useState<any>();
  const [database, setDatabase] = React.useState<any>();

  const fetchApiResponse = React.useCallback(async () => {
    try {
      const { data } = await axios(`${baseApiUrl}/init-test/api/status`)
      setApiStatus(data)
    }
    catch (e: any) {
      console.log('error = ', e.message)
    }
  }, [])


  const fetchProductsApiResponse = React.useCallback(async () => {
    try {
      const { data } = await axios(`${baseApiUrl}/${ProductEndpoints.STATUS}`)
      setProductsApiStatus(data)
    }
    catch (e: any) {
      console.log('error = ', e.message)
    }
  }, [])

  const fetchCategoriesApiResponse = React.useCallback(async () => {
    try {
      const { data } = await axios(`${baseApiUrl}/${CategoryEndpoints.STATUS}`)
      setCategoriesApiStatus(data)
    }
    catch (e: any) {
      console.log('error = ', e.message)
    }
  }, [])




  const fetchDatabaseResponse = React.useCallback(async () => {
    try {
      const { data } = await axios(`${baseApiUrl}/init-test/database/status`)
      setDatabase(data)
    }
    catch (e: any) {
      console.log('error = ', e.message)
    }
  }, [])

  React.useEffect(() => {
    fetchApiResponse();
    fetchDatabaseResponse();
    fetchProductsApiResponse();
    fetchCategoriesApiResponse();
  }, [fetchApiResponse, fetchDatabaseResponse, fetchProductsApiResponse, fetchCategoriesApiResponse])

  return (<MainWrapper>

    <Block>
      <div style={{ display: 'flex' }}>
        API status: &nbsp;
        <Status>
          {apiStatus}
        </Status>
        &nbsp;
      </div>
    </Block>

    <Block>
      <div style={{ display: 'flex' }}>
        Products status: &nbsp;
        <Status>
          {productsApiStatus}
        </Status>
        &nbsp;
      </div>
    </Block>


    <Block>
      <div style={{ display: 'flex' }}>
        Categories status: &nbsp;
        <Status>
          {categoriesApiStatus}
        </Status>
        &nbsp;
      </div>
    </Block>


    <Block>
      <div style={{ display: 'flex' }}>
        Database status: &nbsp;
        <Status>
          {database}
        </Status>
        &nbsp;
      </div>
    </Block>
  </MainWrapper>)
}

export default TestApi;
