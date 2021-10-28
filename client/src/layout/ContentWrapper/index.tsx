import { Layout } from 'antd'
import React from 'react'

const { Content } = Layout

interface IProps {
  children: any
}
const ContentWrapper: React.FC<IProps> = ({ children }) => {
  return <Content style={{padding: '2rem'}}>{children}</Content>
}
export default ContentWrapper
