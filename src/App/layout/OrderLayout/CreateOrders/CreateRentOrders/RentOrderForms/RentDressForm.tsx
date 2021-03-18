import { Button, Form, Segment } from "semantic-ui-react";
import { Field, Form as FinalForm } from "react-final-form";
import React, { FormEvent } from "react";
import { useSelector } from "react-redux";
import { IPostSalonDress } from "../../../../../models/salonDress";
import { RootStore } from "../../../../../stateManagment/store/store";
import DressSearch from "../../Searchbars/DressSearch";
import { dressValidate } from "../../../../../utilities/validators/FormValidation";
import OrderTextInput from "../../../../../utilities/forms/orderforms/OrderTextInput";
import TextAreaInput from "../../../../../utilities/forms/TextAreaInput";

interface Iprops {
  submit: (values: any) => void;
  dress: IPostSalonDress;
  handleInputChange: (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  submitState: boolean;
}
const RentDressForm: React.FC<Iprops> = ({
  submit,
  dress,
  handleInputChange,
  submitState,
}) => {
  const dressList = useSelector((state: RootStore) => state.getDressData.data);
  return (
    <Segment className="conteiner">
      {dressList && <DressSearch />}
      <FinalForm
        onSubmit={submit}
        validate={dressValidate}
        initialValues={dress}
        render={({ handleSubmit, invalid }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group widths="equal">
              <Field
                required
                label="Nazwa: "
                name="name"
                placeholder="Nazwa"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
              <Field
                required
                label="Producent :"
                name="producer"
                placeholder="Producent"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
            </Form.Group>
            <Form.Group widths="equal">
            <Field
                required
                label="Watrość:"
                placeholder="Wartość"
                name="price"
                type="number"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
              <Field
                required
                label="Kolor: "
                placeholder="Kolor"
                name="color"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
              <Field
                required
                label="Rozmiar: "
                placeholder="Rozmiar"
                name="size"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Field
                required
                label="Biodra: "
                placeholder="Biodra"
                name="hipsSize"
                type="number"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
              <Field
                required
                label="Wzrost: "
                placeholder="Wzrost"
                name="heightSize"
                type="number"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
              <Field
                required
                label="Biust: "
                placeholder="Biust"
                name="bustSize"
                type="number"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
              <Field
                required
                label="Talia: "
                placeholder="Talia"
                name="waistSize"
                type="number"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
           
            </Form.Group> 
            {!dress.id &&
            <Field
                required
                label="Dostępne kolory: "
                placeholder="Dostępne kolory"
                name="availableColor"
                onChange={handleInputChange}
                component={TextAreaInput}
              />
            }

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

export default RentDressForm;
