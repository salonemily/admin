import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label } from 'semantic-ui-react';

interface IProps
  extends FieldRenderProps<string, HTMLElement>,
    FormFieldProps {}

const OrderTextAreaInput: React.FC<IProps> = ({
  input,
  width,
  rows,
  placeholder,
  meta: { touched, error },
  pointing,
  onChange,
  label
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <label>{label}</label>
      <textarea rows={rows} {...input} placeholder={placeholder} onChange={onChange}/>
      {touched && error && (
        <Label basic color='red'  pointing={pointing} content={error} />
      )}
    </Form.Field>
  );
};

export default OrderTextAreaInput;
