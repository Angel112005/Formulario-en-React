import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const FormRow = ({ label, input }) => {
  return (
    <Row>
      <Label>{label}</Label>
      {input}
    </Row>
  );
};

export default FormRow;
