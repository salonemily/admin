import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../../stateManagment/store/store";
import { RouteComponentProps } from "react-router-dom";
import { Button, Form, Segment } from "semantic-ui-react";
import swal from "sweetalert";
import { Field, Form as FinalForm } from "react-final-form";
import TextInput from "../../../utilities/forms/TextInput";
import NumberInput from "../../../utilities/forms/NumberInput";
import { saleDressValidate } from "../../../utilities/validators/FormValidation";
import { GetOneOrderDress } from "../../../stateManagment/action/dataManagment/OrderDressActions/OrderDressGetOneAction";
import { OrderDressFormValues } from "../../../models/orderDress";
import { history } from "../../../../";
import { EditOrderDress } from "../../../stateManagment/action/dataManagment/OrderDressActions/OrderDressEditAction";
interface IDetailParams {
  id: string;
}

const OrderDressForm: React.FC<RouteComponentProps<IDetailParams>> = ({
  match,
}) => {
  const getDress = useSelector(
    (state: RootStore) => state.getOrderDressReducer.data
  );
  const getOneDress = useSelector(
    (state: RootStore) => state.getOneOrderDressReducer.data
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [dress, setDress] = useState(new OrderDressFormValues());
  useEffect(() => {
    if (match.params.id && !dress.id) {
      setLoading(true);
      dispatch(GetOneOrderDress(match.params.id, false, null))
        //@ts-ignore
        .then(() => {
          setDress(new OrderDressFormValues(getOneDress!));
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [dispatch, getDress, match.params.id, getOneDress, dress.id]);
  const handleDressSubmit = (values: any) => {
     //@ts-ignore
      dispatch(EditOrderDress(values)).then(() => changePage());
      swal({
        title: "Edycja sukni",
        text: "przebiegła pomyślnie",
        icon: "success",
      });
    }

  const changePage = () => {
    if (match.params.id)
      dispatch(GetOneOrderDress(match.params.id, false, null));
    history.goBack();
  };
  return (
    <Segment className="basic-form-segment">
      <FinalForm
        onSubmit={handleDressSubmit}
        initialValues={dress}
        validate={saleDressValidate}
        render={({ handleSubmit, pristine, invalid }) => (
          <Form
            className="basic-form"
            onSubmit={handleSubmit}
            loading={loading}
          >
            <Field
              inline
              label="Nazwa:"
              name="name"
              placeholder="Nazwa"
              value={dress.name}
              pointing="top"
              component={TextInput}
            />
            <Field
              inline
              label="Producent :"
              name="producer"
              placeholder="Producent"
              pointing="left"
              value={dress.producer}
              component={TextInput}
            />
            <Field
              inline
              label="Kolor :"
              placeholder="Kolor"
              name="color"
              pointing="left"
              value={dress.color}
              component={TextInput}
            />
            <Field
              inline
              label="Rozmiar :"
              placeholder="Rozmiar"
              name="size"
              pointing="left"
              value={dress.size}
              component={TextInput}
            />
            <Field
              inline
              label="Biodra :"
              placeholder="Biodra"
              name="hipsSize"
              pointing="left"
              value={dress.hipsSize}
              component={NumberInput}
            />
            <Field
              inline
              label="Wzrost :"
              placeholder="Wzrost"
              name="heightSize"
              pointing="left"
              value={dress.heightSize}
              component={NumberInput}
            />
            <Field
              inline
              label="Biust :"
              placeholder="Biust"
              name="bustSize"
              pointing="left"
              value={dress.bustSize}
              component={NumberInput}
            />
            <Field
              inline
              label="Talia :"
              placeholder="Talia"
              name="waistSize"
              pointing="left"
              value={dress.waistSize}
              component={NumberInput}
            />
            <Button.Group>
              <Button
                
                onClick={() => history.goBack()}
                type="button"
                content="Wróć"
              />
              <Button.Or text="lub" />
              <Button
                positive
                type="submit"
                content="Potwierdź"
                disabled={pristine || invalid}
              />
            </Button.Group>
          </Form>
        )}
      />
    </Segment>
  );
};

export default OrderDressForm;
