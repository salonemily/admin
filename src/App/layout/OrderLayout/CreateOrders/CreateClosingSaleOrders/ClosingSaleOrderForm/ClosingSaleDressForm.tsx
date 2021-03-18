import { Button, Form, Segment } from "semantic-ui-react";
import { Field, Form as FinalForm } from "react-final-form";
import React, { FormEvent, Fragment } from "react";
import { RootStore } from "../../../../../stateManagment/store/store";
import { useSelector } from "react-redux";
import DressSearch from "../../Searchbars/DressSearch";
import { saleDressValidate } from "../../../../../utilities/validators/FormValidation";
import OrderTextInput from "../../../../../utilities/forms/orderforms/OrderTextInput";
import { IPostSalonDress } from "../../../../../models/salonDress";
import { ListGroup, ListGroupItem } from "reactstrap";
import NullDressView from "./NullDressView";

interface Iprops {
  submit: (values: any) => void;
  dress: IPostSalonDress;
  handleInputChange: (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  submitState: boolean;
}
const ClosingSaleDressForm: React.FC<Iprops> = ({
  submit,
  dress,
  handleInputChange,
  submitState,
}) => {
  const dressList = useSelector((state: RootStore) => state.getDressData.data);
  return (
    <Segment className="conteiner">
      {dressList && <DressSearch />}
      {dress.id ? (
        <Fragment>
          <ListGroup className="closing-sale-list">
            <ListGroupItem>
              <span className="m-1 mr-3">
                <strong>Nazwa:</strong> {dress.name}
              </span>{" "}
              <span className="m-1">
                <strong>Producent:</strong>
                {dress.producer}
              </span>{" "}
            </ListGroupItem>
            <ListGroupItem>
              <span className="m-1 mr-3">
                <strong>Kolor:</strong> {dress.color}
              </span>
              <span className="m-1">
                <strong>Rozmiar:</strong> {dress.size}
              </span>{" "}
            </ListGroupItem>
          </ListGroup>
          <FinalForm
            onSubmit={submit}
            validate={saleDressValidate}
            initialValues={dress}
            render={({ handleSubmit, invalid }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group widths="equal">
                  <Field
                    required
                    label="Biust :"
                    placeholder="Biust"
                    name="bustSize"
                    type="number"
                    onChange={handleInputChange}
                    component={OrderTextInput}
                  />
                  <Field
                    required
                    label="Talia :"
                    placeholder="Talia"
                    name="waistSize"
                    type="number"
                    onChange={handleInputChange}
                    component={OrderTextInput}
                  />
                     <Field
                    required
                    label="Biodra :"
                    placeholder="Biodra"
                    name="hipsSize"
                    type="number"
                    onChange={handleInputChange}
                    component={OrderTextInput}
                  />
                     <Field
                    required
                    label="Wzrost :"
                    placeholder="Wzrost"
                    name="heightSize"
                    type="number"
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
        </Fragment>
      ) : (
        <NullDressView />
      )}
    </Segment>
  );
};

export default ClosingSaleDressForm;
