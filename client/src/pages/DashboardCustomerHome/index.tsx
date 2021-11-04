import { Button } from 'antd';
import React from 'react'
import { useHistory } from 'react-router-dom';

interface IProps{
}

const DashboardCustomerHome: React.FC<IProps> = () => {

  const history = useHistory()

	return (<div>
		DashboardCustomerHome
    <Button onClick={()=>{history.push('/dashboard/settings')}}> Ir para settings</Button>
    <Button onClick={()=>{history.push('/')}}> Ir para home </Button>
	</div>)
}
export default DashboardCustomerHome;
