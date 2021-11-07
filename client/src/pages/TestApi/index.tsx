import axios from 'axios';
import React from 'react'
import Block from '../../layout/Block';
import MainWrapper from '../../layout/MainWrapper';
import { api } from '../../utils/globals';
import { Status } from './style';

interface IProps {
  children: React.ReactNode
}

const TestApi: React.FC<IProps> = ({ children }) => {

  const [apiStatus,setApiStatus] = React.useState<any>();
  const [database, setDatabase] = React.useState<any>();

  const fetchApiResponse = React.useCallback(async () => {
    try {
      const { data } = await axios(`${api}/init-test/api/status`)
      setApiStatus(data)
    }
    catch (e: any) {
      console.log('error = ', e.message)
    }
  }, [])
  const fetchDatabaseResponse = React.useCallback(async () => {
    try {
      const { data } = await axios(`${api}/init-test/database/status`)
      setDatabase(data)
    }
    catch (e: any) {
      console.log('error = ', e.message)
    }
  }, [])

  React.useEffect(()=>{
      fetchApiResponse();
      fetchDatabaseResponse();
    },[])

  return (<MainWrapper>
    <Block><div style={{display: 'flex'}}>API status: &nbsp; <Status>{ apiStatus }</Status>&nbsp;</div></Block>
    <Block><div style={{display: 'flex'}}>Database status: &nbsp;  <Status>{ database }</Status>&nbsp;</div></Block>
  </MainWrapper>)
}

export default TestApi;
