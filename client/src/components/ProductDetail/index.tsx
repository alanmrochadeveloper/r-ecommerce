import React from 'react'
import { Typography } from 'antd'
import { Product } from '../../utils/mock/products-mock';

const { Title } = Typography;

interface IProps {
  product: Product
}

const ProductDetail: React.FC<IProps> = ({product}) => {
	return <>
		<div>
			<Title level={1}>Detalhes do produto</Title>
			<div>
				Os detalhes do produto vem aqui !
        <div>id: {product.id}</div>
        <div>título: {product.title}</div>
        <div>descrição: {product.description}</div>
        <div>image: {product.image}</div>
        <div>category: {product.category}</div>
			</div>
		</div>
	</>
}

export default ProductDetail;
