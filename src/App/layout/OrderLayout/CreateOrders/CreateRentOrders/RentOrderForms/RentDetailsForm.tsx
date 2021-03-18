import React, { FormEvent } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Field, Form as FinalForm } from "react-final-form";
import OrderTextInput from "../../../../../utilities/forms/orderforms/OrderTextInput";
import OrderTextAreaInput from "../../../../../utilities/forms/orderforms/OrderTextAreaInput";
import { rentOrder } from "../../../../../utilities/validators/FormValidation";
import { IRentOrderPost } from "../../../../../models/rentOrders";

interface Iprops {
  submit: (values: any) => void;
  order: IRentOrderPost;
  handleInputChange: (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  submitState: boolean;
}
const RentDetailsForm: React.FC<Iprops> = ({
  submit,
  handleInputChange,
  order,
  submitState,
}) => {
  return (
    <Segment className="conteiner">
      <FinalForm
        onSubmit={submit}
        validate={rentOrder}
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
                label="Wypożyczenie od:"
                type="date"
                name="rentStartDate"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
              <Field
                required
                label="Wypożyczenie do:"
                type="date"
                name="rentEndDate"
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

export default RentDetailsForm;
