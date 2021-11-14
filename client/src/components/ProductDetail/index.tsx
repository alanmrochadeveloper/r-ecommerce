import React from 'react'
import { Typography } from 'antd'
import { Product } from '../../utils/mock/products-mock'
import productImage from '../../assets/mock-product.jpeg'

const { Title } = Typography

interface IProps {
    product: Product
}

const ProductDetail: React.FC<IProps> = ({ product }) => {
    return (
        <>
            <div>
                <Title level={1}>Detalhes do produto</Title>
                <div>
                    Os detalhes do produto vem aqui !<div>id: {product.id}</div>
                    <div>título: {product.title}</div>
                    <div>descrição: {product.description}</div>
                    <div>category: {product.category}</div>
                    <div>
                        <img
                            src={productImage}
                            alt={`${product.title}`}
                            style={{ maxWidth: 100 }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
