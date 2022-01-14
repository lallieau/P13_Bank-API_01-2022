import styled from 'styled-components';

const Field = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;
const Label = styled.label`
  font-weight: bold;
  text-transform: capitalize;
`;
const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;
const RememberField = styled.div`
  display: flex;
`;
const RememberLabel = styled.label`
  margin-left: 0.25rem;
  text-transform: capitalize;
`;
const RememberInput = styled.input``;

export const FormField = ({className, labelFor, label, inputType, inputId}) => {
  return (
    <>
      {className ? (
        <RememberField>
          <RememberInput type={inputType} id={inputId} />
          <RememberLabel for={labelFor}>{label}</RememberLabel>
        </RememberField>
      ) : (
        <Field>
          <Label for={labelFor}>{label}</Label>
          <Input type={inputType} id={inputId} />
        </Field>
      )}
    </>
  );
};
