import { Button } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

interface IProps{

  }

const DashboardSettings: React.FC<IProps> =()=>{
    const history = useHistory()
    return (
      <div>
        Settings
      <Button htmlType="button" type="ghost" onClick={()=>{history.push('/dashboard')}} >
        voltar para home do portal
      </Button>
      </div> 
    )
  } 

  export default DashboardSettings 
