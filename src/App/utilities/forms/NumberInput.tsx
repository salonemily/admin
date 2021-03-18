import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label } from 'semantic-ui-react';

interface IProps
  extends FieldRenderProps<number, HTMLElement>,
    FormFieldProps {}

const NumberInput: React.FC<IProps> = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error },
  inline,
  label,
  pointing
}) => {
  return (
    <Form.Field error={touched && !!error} type={type} width={width} inline={inline}>
      <label>{label}</label>
      <input {...input} type="number" placeholder={placeholder} />
      {touched && error && (
        <Label basic color='red'  pointing={pointing} content={error} />
      )}
    </Form.Field>
  );
};

export default NumberInput;
