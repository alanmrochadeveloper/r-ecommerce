import React from 'react';
import { Layout } from 'antd';
import { appName } from '../../utils/globals';

const { Footer } = Layout;

interface IProps {
  style?: any
}

const MainFooter: React.FC<IProps> = ({ style }) => {
  return (
    <Footer
      style={{ textAlign: 'center', ...style }}
    >
      {`${appName} `}&copy;{` ${new Date().getFullYear()}`}
    </Footer>
  )
}
export default MainFooter;
