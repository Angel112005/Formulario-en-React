

import { useState } from 'react';

import ProductForm from '../organisms/ProductForm';
import ProductList from '../organisms/ProductList';
import LinkedList from '../utils/LinkedList';

function Home() {
  const [productList, setProductList] = useState(new LinkedList());
  const [showProducts, setShowProducts] = useState(false);

  const handleSaveProduct = (product) => {
    const newList = new LinkedList();
    newList.head = productList.head;
    newList.add(product);
    setProductList(newList);
  };

  return (
    <div>
      <h1>Alta de Productos de Ropa</h1>
      <ProductForm onSave={handleSaveProduct} />
      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? 'Ocultar Artículos Guardados' : 'Mostrar Artículos Guardados'}
      </button>
      {showProducts && <ProductList products={productList.toArray()} />}
    </div>
  );
}

export default Home;
