import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Popup } from "semantic-ui-react";
import { RootStore } from "../../stateManagment/store/store";
import { NavLink } from "react-router-dom";
import { GetOneClient } from "../../stateManagment/action/dataManagment/ClientActions/ClientGetOneAction";
import ISaleOrder from "../../models/saleOrders";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
const ClientDetails = () => {
  const getClient = useSelector((state: RootStore) => state.getOneClient.data);
  const dispatch = useDispatch();
  const HandleClick = () => {
    dispatch(GetOneClient("", true, null));
  };
  const { rentAgreement, salesAgreement, closingSalesAgrement } = getClient!;

  const createSaleList = () => {
    //@ts-ignore
    const dupa = salesAgreement.map((result: ISaleOrder) => {
      return (
        <Fragment>
          <a key={result.id} href={`/zamówienia/sprzedaż/${result.id}`}>
            Umowa {result.agreementDate.split("T")[0]}
          </a>
          <br />
        </Fragment>
      );
    });
    return dupa;
  };
  const createClosingSaleList = () => {
    //@ts-ignore
    const dupa = closingSalesAgrement.map((result: ISaleOrder) => {
      return (
        <Fragment>
          <a key={result.id} href={`/zamówienia/wyprzedaży/${result.id}`}>
            Umowa {result.agreementDate.split("T")[0]}
          </a>
          <br />
        </Fragment>
      );
    });
    return dupa;
  };
  const createRentList = () => {
    //@ts-ignore
    const dupa = rentAgreement.map((result: ISaleOrder) => {
      return (
        <Fragment>
          <a key={result.id} href={`/zamówienia/wypożyczenie/${result.id}`}>
            Umowa {result.agreementDate.split("T")[0]}
          </a>
          <br />
        </Fragment>
      );
    });
    return dupa;
  };

  return (
    <Fragment>
      <Card className="card-body-conteiner">
        <CardBody>
          <CardTitle tag="h3">{getClient?.name}</CardTitle>
          <CardSubtitle tag="h4" className="mb-2 text-muted">
            {getClient?.surname}
          </CardSubtitle>
        </CardBody>
        <CardBody>
          <CardText className="data-field">
            {" "}
            <span className="title">Numer telefonu :</span>{" "}
            <span>{getClient?.phoneNumber}</span>
          </CardText>
          <CardText className="data-field">
            <span className="title">E-mail :</span>
            <span>{getClient?.email}</span>
          </CardText>
          <CardText className="data-field">
            <span className="title">Ulica :</span>
            <span>{getClient?.street}</span>
          </CardText>
          <CardText className="data-field">
            {" "}
            <span className="title">Miasto :</span>
            <span>{getClient?.city}</span>{" "}
          </CardText>
          <CardText>
            {salesAgreement.length > 0 && (
              <Popup
                content={createSaleList}
                on="click"
                pinned
                trigger={
                  <Button
                    content={
                      salesAgreement.length > 1
                        ? "Umowy sprzedaży"
                        : "Umowa sprzedaży"
                    }
                    icon="folder open"
                    labelPosition="left"
                  />
                }
              />
            )}
          </CardText>
          <CardText >
            {rentAgreement.length > 0 && (
              <Popup
                content={createRentList}
                on="click"
                pinned
                trigger={
                  <Button
                    content={
                      rentAgreement.length > 1
                        ? "Umowy wypożyczenia"
                        : "Umowa wypożyczenia"
                    }
                    icon="folder open"
                    labelPosition="left"
                  />
                }
              />
            )}
          </CardText>
          <CardText>
            {closingSalesAgrement.length > 0 && (
              <Popup
                content={createClosingSaleList}
                on="click"
                pinned
                trigger={
                  <Button
                    content={
                      closingSalesAgrement.length > 1
                        ? "Umowy wyprzedaży"
                        : "Umowa wyprzedaży"
                    }
                    icon="folder open"
                    labelPosition="left"
                  />
                }
              />
            )}
          </CardText>
        </CardBody>
        <CardBody className="button-body">
          <Button
            basic
            color="black"
            content="Wróć"
            onClick={HandleClick}
            icon="left arrow"
          />

          <Button
            basic
            color="green"
            content="Edytuj"
            as={NavLink}
            to={`/edycjaKlienta/${getClient?.id}`}
            icon="edit"
          />
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default ClientDetails;
