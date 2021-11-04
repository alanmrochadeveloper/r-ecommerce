import {ShoppingCartOutlined, UserOutlined,DollarOutlined } from '@ant-design/icons';

  export const iconPicker = (i: string)  => {
      switch(i){
          case  'ShoppingCartOutlined': return <ShoppingCartOutlined />;
          case  'UserOutlined': return <UserOutlined/>;
          case 'DollarOutlined': return <DollarOutlined />;
        }
    }

