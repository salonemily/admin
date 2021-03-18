import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../../stateManagment/store/store";
import { RouteComponentProps, Link } from "react-router-dom";
import { DressGetOneAction } from "../../../stateManagment/action/dataManagment/SalonDressActions/DressGetOneAction";
import { Button, Form, Segment } from "semantic-ui-react";
import { DressFormValues, IPostSalonDress } from "../../../models/salonDress";
import { v4 as uuid } from "uuid";
import { DressPostAction } from "../../../stateManagment/action/dataManagment/SalonDressActions/DressPostAction";
import { DressEditAction } from "../../../stateManagment/action/dataManagment/SalonDressActions/DressEditAction";
import swal from "sweetalert";
import { Field, Form as FinalForm } from "react-final-form";
import TextInput from "../../../utilities/forms/TextInput";
import NumberInput from "../../../utilities/forms/NumberInput";
import { dressValidate } from "../../../utilities/validators/FormValidation";
import DeleteDress from "../../../stateManagment/action/dataManagment/SalonDressActions/DressDeleteAction";
import { history } from "../../../..";
import TextAreaInput from "../../../utilities/forms/TextAreaInput";
import { firstUpperCase } from "../../../utilities/Additional";
interface IDetailParams {
  id: string;
}

const DressForm: React.FC<RouteComponentProps<IDetailParams>> = ({ match }) => {
  const getOneDress = useSelector((state: RootStore) => state.getOneDress.data);
  const isDelete = useSelector(
    (state: RootStore) => state.deleteDressReducer.isSuccesfull
  );
  const isReady = useSelector(
    (state: RootStore) => state.getOneDress.isLoading
  );
  const postAction = useSelector((state: RootStore) => state.postDress);
  const editAction = useSelector((state: RootStore) => state.updateDress);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [dress, setDress] = useState(new DressFormValues());
  const { isLoading, isSuccesfull } = postAction;
  const { isLoading: editLoading, isSuccesfull: editSuccesfull } = editAction;
  useEffect(() => {
    if (match.params.id) {
      setLoading(true);
      if (isReady && !isDelete) {
        dispatch(DressGetOneAction(match.params.id, false, null));
      }
      if (getOneDress) {
        setDress(new DressFormValues(getOneDress));
      }
      if (!isReady) setLoading(false);
    }
    if (!isLoading || !editLoading) {
      if (isSuccesfull || editSuccesfull)
        swal({
          title: "Gratulacje",
          text: "Dane zostały zapisane !",
          icon: "success",
        });
      else
        swal({
          title: "Błąd",
          text:
            "Coś poszło nie tak sprawdź połączenie internetowe albo zadzwoń pod numer 696022332",
          icon: "error",
        });

      if (match.params.id)
        dispatch(DressGetOneAction(match.params.id, false, null));
      history.goBack();
    }
  }, [
    dispatch,
    match.params.id,
    getOneDress,
    isReady,
    isDelete,
    isLoading,
    editLoading,
    isSuccesfull,
    editSuccesfull,
  ]);

  const handleDressSubmit = (values: IPostSalonDress) => {
    setButtonLoading(true);
    if (!dress.id) {
      let newDress = {
        ...values,
        id: uuid(),
        producer: firstUpperCase(values.producer!),
        name: firstUpperCase(values.name!)
      };
      dispatch(DressPostAction(newDress));

    } else {
      let upperCase = {
        ...values,
        producer: firstUpperCase(values.producer!),
        name: firstUpperCase(values.name!)
      };
      dispatch(DressEditAction(upperCase));
    }
  };

  const onDelete = () => {
    swal({
      title: "Czy jesteś pewny ?",
      text: "Usunięcie tej sukni  spowoduje wykasowanie powiązanych z nią umów",
      icon: "warning",
      //@ts-ignore
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Usunąłeś suknie!", {
          icon: "success",
        });
        dispatch(DeleteDress(match.params.id));
        dispatch(DressGetOneAction("", true, null));
        history.goBack();
      }
    });
  };
  return (
    <Segment className="basic-form-segment">
      <FinalForm
        onSubmit={handleDressSubmit}
        initialValues={dress}
        validate={dressValidate}
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
              label="Cena :"
              name="price"
              placeholder="Cena"
              pointing="left"
              value={dress.price}
              component={NumberInput}
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
            <Field
              inline
              label="Dostępne kolory :"
              placeholder="Dostępne kolory"
              name="availableColor"
              pointing="left"
              value={dress.availableColor}
              component={TextAreaInput}
            />
            <Button.Group>
              <Button as={Link} to="/suknie-salonowe" content="Wróć" />
              {dress.id && (
                <Fragment>
                  <Button.Or text="lub" />
                  <Button
                    type="button"
                    content="Usuń"
                    negative
                    onClick={onDelete}
                  />
                </Fragment>
              )}
              <Button.Or text="lub" />

              <Button
                positive
                type="submit"
                onClick={handleSubmit}
                loading={buttonLoading}
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

export default DressForm;
