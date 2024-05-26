import { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import FormRow from '../molecules/FormRow';

const ProductForm = ({ onSave }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    brand: '',
    price: '',
    size: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
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
        input={<Input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Nombre del producto" />}
      />
      <FormRow
        label="Descripción"
        input={<Input type="text" name="description" value={product.description} onChange={handleChange} placeholder="Descripción del producto" />}
      />
      <FormRow
        label="Categoría"
        input={<Input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Categoría del producto" />}
      />
      <FormRow
        label="Marca"
        input={<Input type="text" name="brand" value={product.brand} onChange={handleChange} placeholder="Marca del producto" />}
      />
      <FormRow
        label="Precio"
        input={<Input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Precio del producto" />}
      />
      <FormRow
        label="Talla"
        input={<Input type="text" name="size" value={product.size} onChange={handleChange} placeholder="Talla del producto" />}
      />
      <Button type="submit" text="Guardar Artículo" />
    </form>
  );
};

export default ProductForm;
