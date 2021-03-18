import React, { FormEvent } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Field, Form as FinalForm } from "react-final-form";
import { ISaleOrderPost } from "../../../../../models/saleOrders";
import OrderTextAreaInput from "../../../../../utilities/forms/orderforms/OrderTextAreaInput";
import OrderTextInput from "../../../../../utilities/forms/orderforms/OrderTextInput";
import { saleOrder } from "../../../../../utilities/validators/FormValidation";

interface Iprops {
  submit: (values: any) => void;
  order: ISaleOrderPost;
  handleInputChange: (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  submitState: boolean;
}
const SaleDetailsForm: React.FC<Iprops> = ({
  submit,
  handleInputChange,
  order,
  submitState,
}) => {
  return (
    <Segment className="conteiner">
      <FinalForm
        onSubmit={submit}
        validate={saleOrder}
        initialValues={order}
        render={({ handleSubmit, invalid }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group widths="equal">
              <Field
                required
                label="Łączny koszt :"
                name="totalPrice"
                placeholder="Łączny koszt   :"
                type="number"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
              <Field
                required
                label="Zadatek :"
                name="deposit"
                placeholder="Zadatek :"
                type="number"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Field
                required
                label="Data ślubu"
                type="date"
                name="weddingDate"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
              <Field
                required
                label="Realizacja od:"
                type="date"
                name="realizationDateStart"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
              <Field
                required
                label="Realizacja do:"
                type="date"
                name="realizationDateEnd"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
              <Field
                required
                label="Odbiór:"
                type="date"
                name="realizationDeadLine"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
            </Form.Group>
            <Field
              label="Uwagi do zamówienia"
              placeholder="Wpisz dodatkowe uwagi..."
              name="orderComments"
              onChange={handleInputChange}
              component={OrderTextAreaInput}
            />
            <Field
              label="Dodatkowe Informacje"
              placeholder="Wpisz dodatkowe informacje..."
              name="additionalInfo"
              onChange={handleInputChange}
              component={OrderTextAreaInput}
            />

            <Button
              type="submit"
              onClick={handleSubmit}
              content="Zapisz"
              disabled={invalid || submitState}
            />
          </Form>
        )}
      />
    </Segment>
  );
};

export default SaleDetailsForm;
