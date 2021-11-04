import { Button, Form, Input, Typography } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import ContentWrapper from '../../layout/ContentWrapper'

interface IProps { }
const Registration: React.FC<IProps> = () => {
	const history = useHistory()

	return (
		<>
			<ContentWrapper>
				<Typography.Title level={4} >Registrar</Typography.Title>
				<Form wrapperCol={{ span: 8 }} labelCol={{ span: 8 }}>
					<Form.Item
						label="Primeiro nome"
						name="firstName"
						className="first-name-input"
						rules={[{ required: true, message: 'Digite o seu nome' }]}
					>
						<Input className="first-name-input" />
					</Form.Item>
					<Form.Item
						label="Sobrenome"
						name="lastName"
						className="last-name-label"
						rules={[{ required: true, message: 'Digite o seu sobrenome' }]}
					>
						<Input className="last-name-input" />
					</Form.Item>
					<Form.Item
						label="Email"
						name="email"
						className="email-label"
						rules={[{ required: true, message: 'Digite o seu email' }]}
					>
						<Input className="email-input" type="email" />
					</Form.Item>
					<Form.Item
						label="Senha"
						name="password"
						className="password-label"
						rules={[{ required: true, message: 'Digite o sua senha' }]}
					>
						<Input className="password-input" type="password" />
					</Form.Item>
					<Form.Item
						label="Confirmar Senha"
						name="confirmPassword"
						className="confirm-password-label"
						rules={[{ required: true, message: 'Confirme sua senha' }]}
					>
						<Input className="confirm-password-input" type="password" />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" name="buttonSubmit" htmlType="submit">
							Registrar
						</Button>
					</Form.Item>
				</Form>
			</ContentWrapper>
			<Button type="link" onClick={() => history.push('/')}>
				Voltar para início
			</Button>
		</>
	)
}
export default Registration
