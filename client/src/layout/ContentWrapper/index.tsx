import { Layout } from 'antd'
import React from 'react'

const { Content } = Layout

interface IProps {
  children: any
}
const ContentWrapper: React.FC<IProps> = ({ children }) => {
  return <Content style={{ minHeight: '80vh', background: '#e2e2e2', margin: '2rem', padding: '2rem', borderRadius: 12 }}>
    {children}
  </Content>
}
export default ContentWrapper
