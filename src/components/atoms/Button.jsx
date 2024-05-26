

import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Button({ text, onClick, type = "button" }) {
  return <StyledButton onClick={onClick} type={type}>{text}</StyledButton>;
}

export default Button;
