import { Button, Form, Input } from 'antd'
import React from 'react'
import { useHistory } from 'react-router'
import MainWrapper from '../../layout/MainWrapper'

interface IProps { }
const Login: React.FC<IProps> = () => {
  const history = useHistory()

  const { Item } = Form;
  const { Password } = Input;

  return (
    <>
      <MainWrapper>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Item
            className="username-label"
            label="Nome do usuário"
            name="username"
            rules={[
              { required: true, message: 'Por favor entre com o seu login' },
            ]}
          >
            <Input className="username-input" />
          </Item>
          <Item
            className="password-label"
            label="Senha do usuário"
            name="password"
            rules={[
              { required: true, message: 'Por favor entre com o sua senha' },
            ]}
          >
            <Password className="password-input" />
          </Item>
          <Item
            className="password-label"
            label="Senha do usuário"
            name="password"
            rules={[
              { required: true, message: 'Por favor entre com o sua senha' },
            ]}
          >
            <Password className="password-input" />
          </Item>
          <Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Item>
          <Item>
            <Button
              type="link"
              className="cadastrar"
              onClick={() => history.push('/cadastrar')}
            >
              Cadastrar
            </Button>
          </Item>
        </Form>
      </MainWrapper>
    </>
  )
}
export default Login
