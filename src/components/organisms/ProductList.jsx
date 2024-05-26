

import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

function ProductList({ products }) {
  return (
    <div>
      {products.map((product, index) => (
        <Card key={index}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Categoría: {product.category}</p>
          <p>Marca: {product.brand}</p>
          <p>Precio: ${product.price}</p>
          <p>Talla: {product.size}</p>
        </Card>
      ))}
    </div>
  );
}

export default ProductList;
