import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label } from 'semantic-ui-react';

interface IProps
  extends FieldRenderProps<string, HTMLElement>,
    FormFieldProps {}

const OrderTextInput: React.FC<IProps> = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error },
  label,
  required,
  onChange,
}) => {
  return (
    <Form.Field error={touched && !!error } type={type} width={width} required={required}>
      <label>{label}</label>
      <input {...input} placeholder={placeholder} onChange={onChange}/>
      {touched && error && (
        <Label basic color='red'   pointing="above" content={error} />

      )}
    </Form.Field>
  );
};

export default OrderTextInput;
