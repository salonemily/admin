import { Fragment } from "react";
import { Button, Form, Header } from "semantic-ui-react";
import { Field, Form as FinalForm } from "react-final-form";
import TextInput from "../../utilities/forms/TextInput";
import { loginValidate } from "../../utilities/validators/FormValidation";
import { Login } from "../../stateManagment/action/dataManagment/UserActions/LoginAction";
import { ILoggin } from "../../models/user";
import ErrorMessage from "../../utilities/forms/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../stateManagment/store/store";

const LoginForm = () => {
  const isError = useSelector(
    (state: RootStore) => state.loginReducer.logginError
  );
  const dispatch = useDispatch();
  return (
    <Fragment>
      <FinalForm
        onSubmit={(values: ILoggin) => dispatch(Login(values))}
        validate={loginValidate}
        render={({
          handleSubmit,
          submitting,
          invalid,
          pristine,
          dirtySinceLastSubmit,
        }) => (
          <Form onSubmit={handleSubmit} error>
            <Header as="h2" content="Login" color="orange" textAlign="center" />
            <Field
              label="Login:"
              name="username"
              placeholder="Login"
              component={TextInput}
            />
            <Field
              label="Hasło :"
              name="password"
              placeholder="Hasło"
              type="Password"
              component={TextInput}
            />
            <Button
              disabled={(invalid && !dirtySinceLastSubmit) || pristine}
              loading={submitting}
              color="orange"
              content="Login"
              fluid
            />
          </Form>
        )}
      />
      {isError && (
        <ErrorMessage text="Hasło lub login są niepoprawne"></ErrorMessage>
      )}
    </Fragment>
  );
};

export default LoginForm;
