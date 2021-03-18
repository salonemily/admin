import React, { Fragment } from "react";
import { Button, Header, List, Segment } from "semantic-ui-react";
import { ISaleOrderSummaryData } from "../common/ordersAddons";

interface Iprops {
  data: ISaleOrderSummaryData;
  submit: (values: any) => void;
}
const SaleOrderSummary: React.FC<Iprops> = ({ data, submit }) => {
  const { dress, client, order } = data;
  return (
    <Fragment>
      <Segment.Group>
        <Segment.Group horizontal>
          <Segment>
            {dress && (
              <Fragment>
                <Header as="h3">Suknia</Header>
                <List>
                  <List.Item>Nazwa: {dress.id}</List.Item>
                  <List.Item>Nazwa: {dress.name}</List.Item>
                  <List.Item>Producent: {dress.producer}</List.Item>
                  <List.Item>Kolor: {dress.color}</List.Item>
                  <List.Item>Rozmiar: {dress.size}</List.Item>
                  <List.Item>Biust: {dress.bustSize}</List.Item>
                  <List.Item>Talia: {dress.waistSize}</List.Item>
                  <List.Item>Biodra: {dress.hipsSize}</List.Item>
                  <List.Item>Wzrost: {dress.heightSize}</List.Item>
                </List>
              </Fragment>
            )}
          </Segment>
          <Segment>
            {client && (
              <Fragment>
                <Header as="h3">Klient</Header>
                <List>
                  <List.Item>Nazwa: {client.id}</List.Item>
                  <List.Item>Imię: {client.name}</List.Item>
                  <List.Item>Nazwisko: {client.surname}</List.Item>
                  <List.Item>Numer telefonu: {client.phoneNumber}</List.Item>
                  <List.Item>Adres e-mail: {client.email}</List.Item>
                  <List.Item>Ulica: {client.street}</List.Item>
                  <List.Item>Miasto: {client.city}</List.Item>
                </List>
              </Fragment>
            )}
          </Segment>
          <Segment>
            <Fragment>
              <Header as="h3">Zamówienie</Header>
              {order && (
                <List>
                  <List.Item>Data ślubu: {order.weddingDate}</List.Item>
                  <List.Item>
                    Realizacja od: {order.realizationDateStart}
                  </List.Item>
                  <List.Item>
                  Realizacja do: {order.realizationDateEnd}
                  </List.Item>
                  <List.Item>
                    Odbiór końcowy: {order.realizationDeadLine}
                  </List.Item>
                  <List.Item>Cena: {order.totalPrice}</List.Item>
                  <List.Item>Zadatek: {order.deposit}</List.Item>
                  <List.Item>Kredyt: {order.credit}</List.Item>
                </List>
              )}
            </Fragment>
          </Segment>
        </Segment.Group>
        <Segment.Group className="submit-order-conteiner" horizontal>
          <Button icon="book" content="Realizuj umowę" color="orange" onClick={submit}/>
        </Segment.Group>
      </Segment.Group>
    </Fragment>
  );
};

export default SaleOrderSummary;
