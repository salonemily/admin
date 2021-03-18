import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import swal from "sweetalert";
import {
  ISaleOrderPost,
  SaleOrderFormValues,
} from "../../../../models/saleOrders";
import { EditSaleOrder } from "../../../../stateManagment/action/dataManagment/SaleOrderActions/SaleOrderEditAction";
import { GetOneSaleOrder } from "../../../../stateManagment/action/dataManagment/SaleOrderActions/SaleOrderGetOneAction";
import { RootStore } from "../../../../stateManagment/store/store";
import { Field, Form as FinalForm } from "react-final-form";
import { Button, Form, Segment } from "semantic-ui-react";
import TextInput from "../../../../utilities/forms/TextInput";
import NumberInput from "../../../../utilities/forms/NumberInput";
import SelectInput from "../../../../utilities/forms/SelectInput";
import { saleSelectOptions } from "../../../../utilities/SelectOptions";
import { format } from "date-fns";
import TextAreaInput from "../../../../utilities/forms/TextAreaInput";

interface IDetailParams {
  id: string;
}

const SaleOrderEditForm: React.FC<RouteComponentProps<IDetailParams>> = ({
  match,
}) => {
  const getOneOrder = useSelector(
    (state: RootStore) => state.getOneSaleOrderReducer.data
  );
  const isReady = useSelector(
    (state: RootStore) => state.getOneSaleOrderReducer.isLoading
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(new SaleOrderFormValues());
  useEffect(() => {
    if (match.params.id) {
      if(isReady)
        dispatch(GetOneSaleOrder(match.params.id, null,false))
      if (getOneOrder) {
            let newOrder = {
              ...getOneOrder!,
              weddingDate: format(
                new Date(getOneOrder.weddingDate),
                "yyyy-MM-dd"
              ),
              realizationDateStart: format(
                new Date(getOneOrder.realizationDateStart),
                "yyyy-MM-dd"
              ),
              realizationDateEnd: format(
                new Date(getOneOrder.realizationDateEnd),
                "yyyy-MM-dd"
              ),
              realizationDeadLine: format(
                new Date(getOneOrder.realizationDeadLine),
                "yyyy-MM-dd"
              ),
            
            };
            setOrder(new SaleOrderFormValues(newOrder));
            
          }
          if(!isReady)setLoading(false);
      
    }
  }, [dispatch, getOneOrder, match.params.id,isReady]);

  const handleOrderSubmit = (values: ISaleOrderPost) => {
    dispatch(EditSaleOrder(values));
    swal({
      title: "Edycja szczegółów zamówienia",
      text: "przebiegła pomyślnie",
      icon: "success",
    });
  };
  return (
    <Segment className="basic-form-segment">
      {console.log(order)}
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
              label="Data ślubu"
              type="date"
              name="weddingDate"
              value={order.weddingDate}
              component={TextInput}
            />
            <Field
              inline
              label="Realizacja od:"
              type="date"
              name="realizationDateStart"
              value={order.realizationDateStart}
              component={TextInput}
            />
            <Field
              inline
              label="Realizacja do:"
              type="date"
              name="realizationDateEnd"
              value={order.realizationDateEnd}
              component={TextInput}
            />
            <Field
              inline
              label="Odbiór:"
              type="date"
              name="realizationDeadLine"
              value={order.realizationDeadLine}
              component={TextInput}
            />
            <Field
              inline
              label="Uwagi do zamówienia"
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
              placeholder="Wpisz dodatkowe informacje..."
              name="fittingNotes"
              value={order.fittingNotes}
              component={TextAreaInput}
            />
            <Button.Group>
              <Button
                as={Link}
                to={`/zamówienia/sprzedaż/${order.id}`}
                content="Wróć"
              />
              <Button.Or text="lub" />

              <Button
                positive
                type="submit"
                onClick={handleSubmit}
                content="Potwierdź"
                disabled={pristine}
              />
            </Button.Group>
          </Form>
        )}
      />
    </Segment>
  );
};

export default SaleOrderEditForm;
