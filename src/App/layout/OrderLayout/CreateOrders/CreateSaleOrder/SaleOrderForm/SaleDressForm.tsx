import { Button, Form, Icon, Popup, Segment } from "semantic-ui-react";
import { Field, Form as FinalForm } from "react-final-form";
import React, { FormEvent } from "react";
import { IPostOrderDress } from "../../../../../models/orderDress";
import { RootStore } from "../../../../../stateManagment/store/store";
import { useSelector } from "react-redux";
import DressSearch from "../../Searchbars/DressSearch";
import { saleDressValidate } from "../../../../../utilities/validators/FormValidation";
import OrderTextInput from "../../../../../utilities/forms/orderforms/OrderTextInput";

interface Iprops {
  submit: (values: any) => void;
  dress: IPostOrderDress;
  handleInputChange: (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  submitState: boolean;
}
const SaleDressForm: React.FC<Iprops> = ({
  submit,
  dress,
  handleInputChange,
  submitState,
}) => {
  const OneDress = useSelector((state: RootStore) => state.getOneDress.data);
  const dressList = useSelector((state: RootStore) => state.getDressData.data);
  const style = {
    letterSpacing: 1,
    padding: 20,
  };
  return (
    <Segment className="conteiner">
      {dressList && <DressSearch />}
      <FinalForm
        onSubmit={submit}
        validate={saleDressValidate}
        initialValues={dress}
        render={({ handleSubmit, invalid }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group widths="equal">
              <Field
                required
                label="Nazwa:"
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
                label="Kolor :"
                placeholder="Kolor"
                name="color"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
              <Popup
                content={OneDress ? OneDress.availableColor : "Wybierz suknie!"}
                size="large"
                style={style}
                trigger={<Icon name='info' color='black' size='large'/>}
              />
              <Field
                required
                label="Rozmiar :"
                placeholder="Rozmiar"
                name="size"
                onChange={handleInputChange}
                component={OrderTextInput}
              />
            </Form.Group>
            <Form.Group widths="equal">
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

export default SaleDressForm;
