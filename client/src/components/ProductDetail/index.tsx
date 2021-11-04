import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography;

interface IProps {
	children: any
}

const ProductDetail: React.FC<IProps> = ({ children }) => {
	return <>
		<div>
			<Title level={1}>Detalhes do produto</Title>
			<div>
				Os detalhes do produto vem aqui !
				{children}
			</div>
		</div>
	</>
}

export default ProductDetail;
