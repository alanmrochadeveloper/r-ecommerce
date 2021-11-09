import {ShoppingCartOutlined, UserOutlined,DollarOutlined, HomeOutlined } from '@ant-design/icons';

  export const iconPicker = (i: string)  => {
      switch(i){
          case  'ShoppingCartOutlined': return <ShoppingCartOutlined />;
          case  'UserOutlined': return <UserOutlined/>;
          case 'DollarOutlined': return <DollarOutlined />;
          case 'HomeOutlined': return <HomeOutlined />
        }
    }

