import React from 'react'
import { Typography } from 'antd'
import { IProduct } from '../../utils/mock/products-mock'
import productImage from '../../assets/mock-product.jpeg'

const { Title } = Typography

interface IProps {
    product: IProduct
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
                    <div>categoria: {product.category}</div>
                    <div>
                        <img
                            src={productImage} // TODO in the near future add this = > src={product.imageSource}
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
