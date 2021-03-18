import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label } from 'semantic-ui-react';

interface IProps
  extends FieldRenderProps<string, HTMLElement>,
    FormFieldProps {}

const TextInput: React.FC<IProps> = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error },
  inline,
  label,
  pointing,
  errorLabel,
}) => {
  return (
    <Form.Field error={touched && !!error } type={type} width={width} inline={inline} >
      <label>{label}</label>
      <input {...input} placeholder={placeholder} />
      {touched && error && errorLabel && (
        <Label basic color='red'   pointing={pointing} content={error} />

      )}
    </Form.Field>
  );
};

export default TextInput;
