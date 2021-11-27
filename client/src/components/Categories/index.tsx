import Title from "antd/lib/typography/Title";
import React from "react";
import { useRouteMatch } from "react-router";
import MainWrapper from "../../layout/MainWrapper";
import { IProduct, products } from "../../utils/mock/products-mock";
import ProductDetail from "../ProductDetail";

interface IProps {}
const Categories: React.FC<IProps> = () => {
  const [prods, setProds] = React.useState<IProduct[]>(products);
  const { params } = useRouteMatch();
  const { categoria } = params;
  console.log(" params = ", params);
  return (
    <MainWrapper>
      <Title level={2}>Categorias</Title>
      <Title level={4}>{categoria}</Title>
      <ul style={{ listStyle: "none" }}>
        {prods.map((p) => {
          console.log("p.category ", p.category);
          console.log("categoria ", categoria);
          console.log("categoria === p.category ", categoria === p.category);
          return p.category === categoria ? (
            <li>
              <ProductDetail product={p} />
            </li>
          ) : null;
        })}
      </ul>
    </MainWrapper>
  );
};
export default Categories;
