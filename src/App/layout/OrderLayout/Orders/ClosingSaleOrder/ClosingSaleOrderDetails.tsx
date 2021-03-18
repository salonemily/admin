import React, { FormEvent, Fragment, SyntheticEvent, useEffect, useState } from "react";
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
import { EditClosingSaleOrderCredit } from "../../../../stateManagment/action/dataManagment/ClosingSaleOrder/ClosingSaleOrderEditCreditAction";
import { EditClosingSaleOrderStatus } from "../../../../stateManagment/action/dataManagment/ClosingSaleOrder/ClosingSaleOrderEditStatusAction";
import { GetOneClosingSaleOrder } from "../../../../stateManagment/action/dataManagment/ClosingSaleOrder/ClosingSaleOrderGetOneAction";
import { RootStore } from "../../../../stateManagment/store/store";
import { dataFormat } from "../../../../utilities/Additional";
import LoaderComponent from "../../../../utilities/LoaderComponent";
import { closingSaleOptions } from "../../../../utilities/SelectOptions";
import ClosingSaleOrderPdf from "../../CreateOrders/PdfAgrement/ClosingSaleOrderPdf";
interface DetailsParams {
  id: string;
}
const ClosingSaleOrderDetails: React.FC<RouteComponentProps<DetailsParams>> = ({
  match,
}) => {
  const [price, setPrice] = useState<number | string>("");
  const dispatch = useDispatch();
  const order = useSelector(
    (state: RootStore) => state.getOneClosingSaleOrderReducer.data
  );
  const isReady = useSelector(
    (state: RootStore) => state.getOneClosingSaleOrderReducer.isLoading
  );
  const changePrice = useSelector(
    (state: RootStore) => state.editSaleOrderCreditReducer
  );

  useEffect(() => {
    if(isReady )dispatch(GetOneClosingSaleOrder(match.params.id, null, false));
    if (!changePrice.isLoading && changePrice.isSuccesfull){
      if (isReady) dispatch(GetOneClosingSaleOrder(match.params.id, null, false));
  }}, [dispatch,
    match.params.id,
    changePrice.isSuccesfull,
    changePrice.isLoading,
    isReady]);
  const handleStatusChange = (
    event: SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    dispatch(EditClosingSaleOrderStatus(order!.id, data.value));
  };
  const onInputChange = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setPrice(parseInt(value));
  };
  if (!order) return <LoaderComponent content="Ładowanie Szczegółów " />;
  else if (isReady) return <LoaderComponent content="Ładowanie Szczegółów " />;
  return (
    <Fragment>
      <Header as="h2" textAlign="center">
        Umowa wyprzedaży z dnia {dataFormat(order.agreementDate)}{" "}
      </Header>

      <Segment className="order-segment">
        <Segment.Group>
          <Segment.Group horizontal>
            <Segment color="orange">
              <Header as="h3" textAlign="center">
                Szczegóły klienta
              </Header>
              <List>
                <List.Item>
                  Imię : <strong>{order.client.name} </strong>
                </List.Item>
                <List.Item>
                  Nazwisko : <strong>{order.client.surname}</strong>
                </List.Item>
                <List.Item>
                  E-mail : <strong>{order.client.email}</strong>
                </List.Item>
                <List.Item>
                  Numer telefonu : <strong>{order.client.phoneNumber}</strong>
                </List.Item>
                <List.Item>
                  Adres :{" "}
                  <strong>
                    {order.client.street} {order.client.city}
                  </strong>
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
                Szczegóły sukni
              </Header>
              <List>
                <List.Item>
                  Nazwa: <strong>{order.weddingDress.name}</strong>
                </List.Item>
                <List.Item>Producent: {order.weddingDress.producer}</List.Item>
                <List.Item>Wartość: {order.weddingDress.price} zł</List.Item>
                <List.Item>Kolor: {order.weddingDress.color}</List.Item>
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
                Szczegóły Zamówienia
              </Header>

              <List>
                <List.Item>
                  Data Ślubu: <strong>{dataFormat(order.weddingDate)}</strong>
                </List.Item>
                <List.Item>
                  Realizacja od: {dataFormat(order.realizationDateStart)}
                </List.Item>
                <List.Item>
                  Realizacja do: {dataFormat(order.realizationDateEnd)}
                </List.Item>
                <List.Item>
                  Odbiór ostateczny do: {dataFormat(order.realizationDeadLine)}
                </List.Item>
                <List.Item>Cena całościowa: {order.totalPrice} zł</List.Item>
                <List.Item>
                  Pozostała kwota: <strong>{order.credit} zł</strong>
                </List.Item>
                <List.Item>
                  Uwagi przy zamówieniu: {order.orderComments}
                </List.Item>
                <List.Item>
                  Dodatkowe informacje: {order.additionalInfo}
                </List.Item>
                <List.Item>
                  Karta przymiarek: {order.additionalChanges}
                </List.Item>
              </List>
              <Button
                className="edit-order"
                as={Link}
                to={`/zamówienia/wyprzedaż/edytujDetale/${order.id}`}
                content="Edytuj zamówienie"
              />
            </Segment>
          </Segment.Group>
          <Segment.Group horizontal>
            <Segment className="flex-button-order">
              <Button
                basic
                content="Wróć"
                as={NavLink}
                to={`/zamówienia/wyprzedaż`}
                icon="left arrow"
              />
              <ClosingSaleOrderPdf data={order} />
            </Segment>
            <Segment className="flex-button-order">
              <Select
                placeholder="Select your country"
                name="status"
                options={closingSaleOptions}
                defaultValue={order.status}
                onChange={handleStatusChange}
              />

              <div>
              <Input
                  placeholder="Dopłata"
                  type="number"
                  onChange={onInputChange}
                  value={price}
                />
              <Button
                  color="green"
                  content="Zatwierdź"
                  disabled={order.credit <= 0 || price <= 0}
                  onClick={() =>{
                    dispatch(EditClosingSaleOrderCredit(order!.id, price));setPrice("")}
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

export default ClosingSaleOrderDetails;
