import { Space } from 'antd';
import React from 'react'

interface IProps {
    children: any
}
const SpaceHorizontal: React.FC<IProps> = ({children}) => {
  return <Space direction='horizontal'>
    {children}
  </Space>
}
export default SpaceHorizontal
