// import styled from 'styled-components';

// const Card = styled.div`
//   border: 1px solid #ccc;
//   padding: 16px;
//   margin: 16px 0;
//   border-radius: 4px;
//   box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// `;

// const ProductList = ({ products }) => {
//   return (
//     <div>
//       {products.map((product, index) => (
//         <Card key={index}>
//           <h3>{product.name}</h3>
//           <p>{product.description}</p>
//           <p>Categoría: {product.category}</p>
//           <p>Marca: {product.brand}</p>
//           <p>Precio: ${product.price}</p>
//           <p>Talla: {product.size}</p>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default ProductList;

import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ProductList = ({ productList }) => {
  // Función para recorrer la lista enlazada y renderizar los productos
  const renderProducts = () => {
    const products = [];
    let current = productList.head;
    while (current !== null) {
      products.push(
        <Card key={current.data.name}>
          <h3>{current.data.name}</h3>
          <p>{current.data.description}</p>
          <p>Categoría: {current.data.category}</p>
          <p>Marca: {current.data.brand}</p>
          <p>Precio: ${current.data.price}</p>
          <p>Talla: {current.data.size}</p>
        </Card>
      );
      current = current.next;
    }
    return products;
  };

  return <div>{renderProducts()}</div>;
};

export default ProductList;
