// import { useState } from 'react';
// import ProductForm from '../organisms/ProductForm';
// import ProductList from '../organisms/ProductList';
// import LinkedList from '../utils/LinkedList';


// const Home = () => {
//   const [productList, setProductList] = useState(new LinkedList());
//   const [showProducts, setShowProducts] = useState(false);

//   const handleSaveProduct = (product) => {
//     const newList = new LinkedList();
//     newList.head = productList.head;
//     newList.add(product);
//     setProductList(newList);
//   };

//   return (
//     <div>
//       <h1>Alta de Productos de Ropa</h1>
//       <ProductForm onSave={handleSaveProduct} />
//       <button onClick={() => setShowProducts(!showProducts)}>
//         {showProducts ? 'Ocultar Artículos Guardados' : 'Mostrar Artículos Guardados'}
//       </button>
//       {showProducts && <ProductList products={productList.toArray()} />}
//     </div>
//   );
// };

// export default Home;


import { useState } from 'react';
import ProductForm from '../organisms/ProductForm';
import ProductList from '../organisms/ProductList';
import LinkedList from '../utils/LinkedList';

const Home = () => {
  const [productList, setProductList] = useState(new LinkedList());
  const [showProducts, setShowProducts] = useState(false);

  const handleSaveProduct = (product) => {
    const newList = new LinkedList();
    newList.head = productList.head;
    newList.add(product);
    setProductList(newList);
  };

  const handleToggleProducts = () => {
    if (showProducts) {
      setShowProducts(false);
    } else {
      setShowProducts(true);
    }
  };

  let buttonText;
  if (showProducts) {
    buttonText = 'Ocultar Artículos Guardados';
  } else {
    buttonText = 'Mostrar Artículos Guardados';
  }

  return (
    <div>
      <h1>Alta de Productos de Ropa</h1>
      <ProductForm onSave={handleSaveProduct} />
      <button onClick={handleToggleProducts}>
        {buttonText}
      </button>
      {showProducts && <ProductList productList={productList} />}
    </div>
  );
};

export default Home;
