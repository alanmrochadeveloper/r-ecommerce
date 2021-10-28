import { Space } from 'antd';
import React from 'react'

interface IProps {
    children: any
}
const SpaceVertical: React.FC<IProps> = ({children}) => {
  return <Space direction='vertical'>
    {children}
  </Space>
}
export default SpaceVertical
