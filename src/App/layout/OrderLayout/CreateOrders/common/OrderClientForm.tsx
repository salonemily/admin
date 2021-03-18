import React, { FormEvent } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Field, Form as FinalForm } from "react-final-form";
import { clientValidate } from "../../../../utilities/validators/FormValidation";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../stateManagment/store/store";
import ClientSearch from "../Searchbars/ClientSearch";
import { IPostClient } from "../../../../models/clients";
import OrderTextInput from "../../../../utilities/forms/orderforms/OrderTextInput";

interface Iprops {
  submit: (values: any) => void;
  client: IPostClient;
  handleInputChange: (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  submitState: boolean;
}
const SaleClientForm: React.FC<Iprops> = ({
  submit,
  client,
  handleInputChange,
  submitState,
}) => {
  const ClientList = useSelector(
    (state: RootStore) => state.getClientData.data
  );
  return (
    <Segment className="conteiner">
      {ClientList && <ClientSearch />}
      <FinalForm
        onSubmit={submit}
        validate={clientValidate}
        initialValues={client}
        render={({ handleSubmit, invalid }) => (
          <Form className="create-form" onSubmit={handleSubmit}>
            <Form.Group widths="equal">
              <Field
                required
                label="Imię: "
                name="name"
                placeholder="Imię"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
              <Field
                required
                label="Nazwisko: "
                name="surname"
                placeholder="Nazwisko"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Field
                required
                type="number"
                label="Numer telefonu: "
                name="phoneNumber"
                placeholder="Numer telefonu"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
              <Field
                required
                label="E-mail: "
                placeholder="E-mail"
                name="email"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Field
                required
                label="Ulica :"
                placeholder="Ulica"
                name="street"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
              <Field
                required
                label="Miasto :"
                placeholder="Miasto"
                name="city"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
            </Form.Group>
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

export default SaleClientForm;
