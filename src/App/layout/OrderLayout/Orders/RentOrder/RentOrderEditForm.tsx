import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import swal from "sweetalert";
import { GetOneSaleOrder } from "../../../../stateManagment/action/dataManagment/SaleOrderActions/SaleOrderGetOneAction";
import { RootStore } from "../../../../stateManagment/store/store";
import { Field, Form as FinalForm } from "react-final-form";
import { Button, Form, Segment } from "semantic-ui-react";
import TextInput from "../../../../utilities/forms/TextInput";
import { format } from "date-fns";
import TextAreaInput from "../../../../utilities/forms/TextAreaInput";
import { IRentOrderPost, RentOrderFormValues } from "../../../../models/rentOrders";
import { EditRentOrder } from "../../../../stateManagment/action/dataManagment/RentOrderActions/RentOrderEditAction";
import { GetOneRentOrder } from "../../../../stateManagment/action/dataManagment/RentOrderActions/RentOrderGetOneAction";

interface IDetailParams {
  id: string;
}

const RentOrderEditForm: React.FC<RouteComponentProps<IDetailParams>> = ({
  match,
}) => {
  const getOneOrder = useSelector(
    (state: RootStore) => state.getRentOneOrder.data
  );
  const isReady = useSelector(
    (state: RootStore) => state.getRentOneOrder.isLoading
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(new RentOrderFormValues());
  useEffect(() => {
    if (match.params.id) {
      if(isReady)
        dispatch(GetOneRentOrder(match.params.id, null,false))
      if (getOneOrder) {
            let newOrder = {
              ...getOneOrder!,
              weddingDate: format(
                new Date(getOneOrder.weddingDate),
                "yyyy-MM-dd"
              ),
              rentStartDate: format(
                new Date(getOneOrder.rentStartDate),
                "yyyy-MM-dd"
              ),
              rentEndDate: format(
                new Date(getOneOrder.rentEndDate),
                "yyyy-MM-dd"
              )
            
            };
            setOrder(new RentOrderFormValues(newOrder));
            
          }
          if(!isReady)setLoading(false);
      
    }
  }, [dispatch, getOneOrder, match.params.id,isReady]);

  const handleOrderSubmit = (values: IRentOrderPost) => {
    setLoading(true);
    dispatch(EditRentOrder(values));
  };
  return (
    <Segment className="basic-form-segment">
      <FinalForm
        onSubmit={handleOrderSubmit}
        initialValues={order}
        render={({ handleSubmit, pristine, invalid }) => (
          <Form
            className="basic-form"
            onSubmit={handleSubmit}
            loading={loading}
          >
            <Field
              inline
              label="Data ??lubu"
              type="date"
              name="weddingDate"
              value={order.weddingDate}
              component={TextInput}
            />
            <Field
              inline
              label="Data wypo??yczenia:"
              type="date"
              name="rentStartDate"
              value={order.rentStartDate}
              component={TextInput}
            />
            <Field
              inline
              label="Data oddania:"
              type="date"
              name="rentEndDate"
              value={order.rentEndDate}
              component={TextInput}
            />
            <Field
              inline
              label="Uwagi do zam??wienia"
              placeholder="Wpisz dodatkowe uwagi..."
              name="orderComments"
              value={order.orderComments}
              component={TextAreaInput}
            />
            <Field
              inline
              label="Dodatkowe Informacje"
              placeholder="Wpisz dodatkowe informacje..."
              name="additionalInfo"
              value={order.additionalInfo}
              component={TextAreaInput}
            />
            <Field
              inline
              label="Karta Przymiarek"
              placeholder="Karta przymiarek..."
              name="fittingNotes"
              value={order.fittingNotes}
              component={TextAreaInput}
            />
            <Button.Group>
              <Button
                as={Link}
                to={`/zam??wienia/wypo??yczenie/${order.id}`}
                content="Wr????"
              />
              <Button.Or text="lub" />

              <Button
                positive
                type="submit"
                onClick={handleSubmit}
                content="Potwierd??"
                disabled={pristine}
              />
            </Button.Group>
          </Form>
        )}
      />
    </Segment>
  );
};

export default RentOrderEditForm;
