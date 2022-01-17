import styled from 'styled-components';

const Field = styled.div`
  display: flex;
  flex-direction: ${({theme}) => theme.inputDirection.default};
  text-align: left;
  margin-bottom: 1rem;
`;
const Label = styled.label`
  font-weight: ${({theme}) => theme.fontWeight.bold};
`;
const Input = styled.input`
  padding: 5px;
  font-size: ${({theme}) => theme.fontSize.sm};
`;

/**
 * Renders different form fields
 * @param {boolean} rememberField
 * @param {string} labelFor
 * @param {string} label
 * @param {string} inputType
 * @param {string} inputId
 * @returns {JSX}
 */
export const FormField = ({
  rememberField,
  labelFor,
  label,
  inputType,
  inputId,
}) => {
  return (
    <>
      {rememberField ? (
        <Field theme={{inputDirection: 'row'}}>
          <Input type={inputType} id={inputId} />
          <Label
            htmlFor={labelFor}
            style={{
              marginLeft: '0.25rem',
              fontWeight: ({theme}) => theme.fontWeight.regular,
            }}>
            {label}
          </Label>
        </Field>
      ) : (
        <Field>
          <Label htmlFor={labelFor}>{label}</Label>
          <Input type={inputType} id={inputId} />
        </Field>
      )}
    </>
  );
};
