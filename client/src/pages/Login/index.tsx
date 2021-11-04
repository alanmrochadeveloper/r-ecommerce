import { Button, Form, Input } from 'antd'
import React from 'react'
import { useHistory } from 'react-router'
import MainWrapper from '../../layout/MainWrapper'

interface IProps { }
const Login: React.FC<IProps> = () => {
	const history = useHistory()

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
					<Form.Item
						className="username-label"
						label="Nome do usuário"
						name="username"
						rules={[
							{ required: true, message: 'Por favor entre com o seu login' },
						]}
					>
						<Input className="username-input" />
					</Form.Item>
					<Form.Item
						className="password-label"
						label="Senha do usuário"
						name="password"
						rules={[
							{ required: true, message: 'Por favor entre com o sua senha' },
						]}
					>
						<Input.Password className="password-input" />
<<<<<<< HEAD
					</Form.Item><Form.Item
						className="password-label"
						label="Senha do usuário"
						name="password"
						rules={[
							{ required: true, message: 'Por favor entre com o sua senha' },
						]}
					>
						<Input.Password className="password-input" />
=======
>>>>>>> 993e7a90f0eabd561441261bb4e0124c2ebfdfa2
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 4, span: 16 }}>
						<Button type="primary" htmlType="submit">
							Enviar
						</Button>
					</Form.Item>
<<<<<<< HEAD
					<Form.Item>
						<Button
							type="link"
							className="cadastrar"
							onClick={() => history.push('/cadastrar')}
						>
							Cadastrar
						</Button>
					</Form.Item>
=======
					<Button
						type="link"
						className="cadastrar"
						onClick={() => history.push('/cadastrar')}
					>
						Cadastrar
					</Button>
>>>>>>> 993e7a90f0eabd561441261bb4e0124c2ebfdfa2
				</Form>
			</MainWrapper>
		</>
	)
}
export default Login
