import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../../stateManagment/store/store";
import { RouteComponentProps, Link } from "react-router-dom";
import { Button, Form, Segment } from "semantic-ui-react";
import { v4 as uuid } from "uuid";
import swal from "sweetalert";
import { Field, Form as FinalForm } from "react-final-form";
import TextInput from "../../../utilities/forms/TextInput";
import NumberInput from "../../../utilities/forms/NumberInput";
import { GetOneClient } from "../../../stateManagment/action/dataManagment/ClientActions/ClientGetOneAction";
import { ClientFormValues, IPostClient } from "../../../models/clients";
import { EditClient } from "../../../stateManagment/action/dataManagment/ClientActions/ClientEditAction";
import { PostClient } from "../../../stateManagment/action/dataManagment/ClientActions/ClientPostAction";
import { clientValidate } from "../../../utilities/validators/FormValidation";
import { history } from "../../../..";
import { DeleteClient } from "../../../stateManagment/action/dataManagment/ClientActions/ClientDeleteAction";

interface IDetailParams {
  id: string;
}

const ClientForm: React.FC<RouteComponentProps<IDetailParams>> = ({
  match,
}) => {
  const isDelete = useSelector(
    (state: RootStore) => state.deleteClientReducer.isSuccesfull
  );
  const getOneClient = useSelector(
    (state: RootStore) => state.getOneClient.data
  );
  const postAction = useSelector((state: RootStore) => state.postClient);
  const editAction = useSelector((state: RootStore) => state.updateClient);
  const isReady = useSelector(
    (state: RootStore) => state.getOneClient.isLoading
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [client, setClient] = useState(new ClientFormValues());
  const { isLoading, isSuccesfull } = postAction;
  const { isLoading: editLoading, isSuccesfull: editSuccesfull } = editAction;

  useEffect(() => {
    if (match.params.id) {
      setLoading(true);
      if (isReady && !isDelete) {
        dispatch(GetOneClient(match.params.id, false, null));
      }
      if (getOneClient) {
        setClient(new ClientFormValues(getOneClient));
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
        dispatch(GetOneClient(match.params.id, false, null));
      history.goBack();
    }
  }, [
    dispatch,
    editLoading,
    editSuccesfull,
    getOneClient,
    isDelete,
    isLoading,
    isReady,
    isSuccesfull,
    match.params.id,
  ]);

  const handleclientSubmit = (values: IPostClient) => {
    setButtonLoading(true);
    if (!client.id) {
      let newclient = {
        ...values,
        id: uuid(),
      };

      dispatch(PostClient(newclient));
    } else dispatch(EditClient(values));
  };

  const onDelete = () => {
    swal({
      title: "Czy jesteś pewny ?",
      text:
        "Usunięcie tego klienta spowoduje wykasowanie powiązanych z nim umów",
      icon: "warning",
      //@ts-ignore
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Usunąłeś klienta!", {
          icon: "success",
        });
        dispatch(DeleteClient(match.params.id));
        dispatch(GetOneClient("", true, null));
        history.goBack();
      }
    });
  };

  return (
    <Segment className="basic-form-segment">
      <FinalForm
        onSubmit={handleclientSubmit}
        initialValues={client}
        validate={clientValidate}
        render={({ handleSubmit, pristine, invalid }) => (
          <Form
            className="basic-form"
            onSubmit={handleSubmit}
            loading={loading}
          >
            <Field
              inline
              label="Imię: "
              name="name"
              placeholder="Imię"
              value={client.name}
              component={TextInput}
            />
            <Field
              inline
              label="Nazwisko: "
              name="surname"
              placeholder="Nazwisko"
              value={client.surname}
              component={TextInput}
            />
            <Field
              inline
              label="Numer telefonu: "
              name="phoneNumber"
              placeholder="Numer telefonu"
              value={client.phoneNumber}
              component={NumberInput}
            />
            <Field
              inline
              label="E-mail: "
              placeholder="E-mail"
              name="email"
              value={client.email}
              component={TextInput}
            />
            <Field
              inline
              label="Ulica :"
              placeholder="Ulica"
              name="street"
              value={client.street}
              component={TextInput}
            />
            <Field
              inline
              label="Miasto :"
              placeholder="Miasto"
              name="city"
              value={client.city}
              component={TextInput}
            />
            <Button.Group>
              <Button as={Link} to="/klientki" content="Wróć" />
              {client.id && (
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
                content="Potwierdź"
                loading={buttonLoading}
                disabled={pristine || invalid}
              />
            </Button.Group>
          </Form>
        )}
      />
    </Segment>
  );
};

export default ClientForm;
