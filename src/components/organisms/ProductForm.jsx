

import { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import FormRow from '../molecules/FormRow';

function ProductForm({ onSave }) {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    brand: '',
    price: '',
    size: ''
  });

  const handleChange = (key) => (value) => {
    setProduct({ ...product, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(product);
    setProduct({ name: '', description: '', category: '', brand: '', price: '', size: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormRow
        label="Nombre"
        input={<Input type="text" name="name" value={product.name} onChange={handleChange('name')} placeholder="Nombre del producto" />}
      />
      <FormRow
        label="Descripción"
        input={<Input type="text" name="description" value={product.description} onChange={handleChange('description')} placeholder="Descripción del producto" />}
      />
      <FormRow
        label="Categoría"
        input={<Input type="text" name="category" value={product.category} onChange={handleChange('category')} placeholder="Categoría del producto" />}
      />
      <FormRow
        label="Marca"
        input={<Input type="text" name="brand" value={product.brand} onChange={handleChange('brand')} placeholder="Marca del producto" />}
      />
      <FormRow
        label="Precio"
        input={<Input type="number" name="price" value={product.price} onChange={handleChange('price')} placeholder="Precio del producto" />}
      />
      <FormRow
        label="Talla"
        input={<Input type="text" name="size" value={product.size} onChange={handleChange('size')} placeholder="Talla del producto" />}
      />
      <Button type="submit" text="Guardar Artículo" />
    </form>
  );
}

export default ProductForm;
