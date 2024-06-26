

import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

function Input({ type, name, value, onChange, placeholder }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
