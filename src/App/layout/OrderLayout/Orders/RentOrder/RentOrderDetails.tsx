import { format } from "date-fns";
import React, { FormEvent, Fragment, SyntheticEvent, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, RouteComponentProps } from "react-router-dom";
import {
  Button,
  DropdownProps,
  Header,
  Input,
  List,
  Segment,
  Select,
} from "semantic-ui-react";
import { setActionValue } from "sweetalert/typings/modules/state";
import { EditRentOrderCredit } from "../../../../stateManagment/action/dataManagment/RentOrderActions/RentOrderEditCreditAction";
import { EditRentOrderStatus } from "../../../../stateManagment/action/dataManagment/RentOrderActions/RentOrderEditStatusAction";
import { GetOneRentOrder } from "../../../../stateManagment/action/dataManagment/RentOrderActions/RentOrderGetOneAction";
import { RootStore } from "../../../../stateManagment/store/store";
import { dataFormat } from "../../../../utilities/Additional";
import LoaderComponent from "../../../../utilities/LoaderComponent";
import { rentSelectOptions } from "../../../../utilities/SelectOptions";
import RentOrderPdf from "../../CreateOrders/PdfAgrement/RentOrderPdf";
interface DetailsParams {
  id: string;
}

const RentOrderDetails: React.FC<RouteComponentProps<DetailsParams>> = ({
  match,
}) => {
  
  const [price, setPrice] = useState<number | string>("");

  const dispatch = useDispatch();
  const order = useSelector((state: RootStore) => state.getRentOneOrder.data);
  const isReady = useSelector(
    (state: RootStore) => state.getRentOneOrder.isLoading
  );
  const changePrice = useSelector(
    (state: RootStore) => state.editRentOrderCreditReducer
  );

  useEffect(() => {
    if(isReady )dispatch(GetOneRentOrder(match.params.id, null, false));
    if (!changePrice.isLoading && changePrice.isSuccesfull){
      if (isReady) dispatch(GetOneRentOrder(match.params.id, null, false));
    }
      
  }, [
    dispatch,
    match.params.id,
    changePrice.isSuccesfull,
    changePrice.isLoading,
    isReady,
  ]);
  const handleStatusChange = (
    event: SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    dispatch(EditRentOrderStatus(order!.id, data.value));
  };
  const onInputChange = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setPrice(parseInt(value));
  };
  if (!order) return <LoaderComponent content="??adowanie Szczeg??????w " />;
  else if (isReady) return <LoaderComponent content="??adowanie Szczeg??????w " />;
  return (
    <Fragment>
      <Header as="h2" textAlign="center">
        Umowa wypo??yczenia z dnia{" "}
        {format(new Date(order.agreementDate), "dd.MM.yyyy")}
      </Header>

      <Segment className="order-segment">
        <Segment.Group>
          <Segment.Group horizontal>
            <Segment color="orange">
              <Header as="h3" textAlign="center">
                Szczeg????y klienta
              </Header>
              <List>
                <List.Item>
                  Imi??: <strong>{order.client.name} </strong>
                </List.Item>
                <List.Item>
                  Nazwisko: <strong>{order.client.surname}</strong>
                </List.Item>
                <List.Item>
                  E-mail: <strong>{order.client.email}</strong>
                </List.Item>
                <List.Item>
                  Numer telefonu: <strong>{order.client.phoneNumber}</strong>
                </List.Item>
                <List.Item>
                  Adres: {order.client.street} {order.client.city}
                </List.Item>
              </List>
              <Button
                className="edit-client"
                as={Link}
                to={`/edycjaKlienta/${order.clientID}`}
                content="Edytuj klienta"
              />
            </Segment>
            <Segment color="orange">
              <Header as="h3" textAlign="center">
                Szczeg????y sukni
              </Header>
              <List>
                <List.Item>
                  Nazwa: <strong>{order.weddingDress.name}</strong>
                </List.Item>
                <List.Item>Producent: {order.weddingDress.producer}</List.Item>
                <List.Item>Kolor: {order.weddingDress.color}</List.Item>
                <List.Item>Warto????: {order.weddingDress.price}</List.Item>
                <List.Item>
                  Rozmiar: <strong>{order.weddingDress.size} </strong>
                </List.Item>
                <List.Item>Biust: {order.weddingDress.bustSize} cm</List.Item>
                <List.Item>Talia: {order.weddingDress.waistSize} cm</List.Item>
                <List.Item>Biodra: {order.weddingDress.hipsSize} cm</List.Item>
                <List.Item>
                  Wzrost: {order.weddingDress.heightSize} cm
                </List.Item>
              </List>

              <Button
                className="edit-dress"
                as={Link}
                to={`/edytuj-suknie/${order.weddingDress.id}`}
                content="Edytuj suknie"
              />
            </Segment>

            <Segment color="orange">
              <Header as="h3" textAlign="center">
                Szczeg????y Zam??wienia
              </Header>

              <List>
                <List.Item>
                  Data ??lubu:
                  <strong> {dataFormat(order.weddingDate)}</strong>
                </List.Item>
                <List.Item>
                  Wypo??yczenie od: {dataFormat(order.rentStartDate)}
                </List.Item>
                <List.Item>
                  Wypo??yczenie do: {dataFormat(order.rentEndDate)}
                </List.Item>
                <List.Item>Cena ca??o??ciowa: {order.totalPrice} z??</List.Item>
                <List.Item>
                  Pozosta??a kwota: <strong>{order.credit} z??</strong>
                </List.Item>
                <List.Item>
                  Uwagi przy zam??wieniu: {order.orderComments}
                </List.Item>

                <List.Item>
                  Dodatkowe informacje: {order.additionalInfo}
                </List.Item>
                {order.fittingNotes.length > 0 && (
                  <List.Item>Karta przymiarek: {order.fittingNotes}</List.Item>
                )}
              </List>
              <Button
                className="edit-order"
                as={Link}
                to={`/zam??wienia/wypo??yczenie/edytujDetale/${order.id}`}
                content="Edytuj zam??wienie"
              />
            </Segment>
          </Segment.Group>
          <Segment.Group horizontal>
            <Segment className="flex-button-order">
              <Button
                basic
                content="Wr????"
                as={NavLink}
                to={`/zam??wienia/wypo??yczenie`}
                icon="left arrow"
              />
              {order && <RentOrderPdf data={order} />}
            </Segment>
            <Segment className="flex-button-order">
              <Select
                placeholder="Select your country"
                name="status"
                options={rentSelectOptions}
                defaultValue={order.status}
                onChange={handleStatusChange}
              />
              <div>
                <Input
                  placeholder="Wprowad?? cen??"
                  type="number"
                  onChange={onInputChange}
                  value={price}
                />
                <Button
                  color="green"
                  content="Zatwierd??"
                  disabled={order.credit <= 0 || price <= 0}
                  onClick={() =>{
                    dispatch(EditRentOrderCredit(order!.id, price));setPrice("")}
                  }
                />
              </div>
            </Segment>
          </Segment.Group>
        </Segment.Group>
      </Segment>
    </Fragment>
  );
};

export default RentOrderDetails;
