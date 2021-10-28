import { Layout } from 'antd'
import React from 'react'

const { Content } = Layout

interface IProps {
  children: any
}
const ContentWrapper: React.FC<IProps> = ({ children }) => {
  return <Content>{children}</Content>
}
export default ContentWrapper
