import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Popup } from "semantic-ui-react";
import { RootStore } from "../../../stateManagment/store/store";
import { DressGetOneAction } from "../../../stateManagment/action/dataManagment/SalonDressActions/DressGetOneAction";
import { NavLink } from "react-router-dom";
import {checkIfFreeOrderStatus, dataFormat, filtrRentOrders} from "../../../utilities/Additional"
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
const DressDetails = () => {
  const dress = useSelector((state: RootStore) => state.getOneDress.data);
  const dispatch = useDispatch();
  const HandleClick = () => {
    dispatch(DressGetOneAction("", true, null));
  };
  const { rentAgreement, closingSalesAgrement } = dress!;
  const createRentList = () => {
    const table = rentAgreement.filter(filtrRentOrders)
    const newtable = table.map((result)=>{
      return(
        <Fragment>
        <a href={`/zamówienia/wypożyczenie/${result.id}`}>Umowa {dataFormat(result.agreementDate)}</a>
        <br/>
        </Fragment>

      )
    })
    return newtable
  };
  return (
    <Fragment>
      {dress && (
        <Card className="card-body-conteiner">
          <CardBody>
            <CardTitle tag="h3">{dress.name}</CardTitle>
            <CardSubtitle tag="h4" className="mb-2 text-muted">
              {dress.producer}
            </CardSubtitle>
          </CardBody>
          <CardBody>
            <CardText className="data-field">
              <span className="title">Cena: </span>
              <span>{dress?.price}</span>
            </CardText>
            <CardText className="data-field">
              <span className="title">Kolor: </span>
              <span>{dress?.color}</span>
            </CardText>
            <CardText className="data-field">
              <span className="title">Rozmiar: </span>
              <span>{dress?.size}</span>
            </CardText>
            {dress.availableColor.length > 0 && (
              <CardText className="data-field">
                <span className="title">Dostępne kolory: </span>
                <span>{dress.availableColor}</span>
              </CardText>
            )}
            <CardText className="data-field">
              <span className="title">Status: </span>
              <span>{rentAgreement.length>0 || closingSalesAgrement ? <span>wolna</span> : <span className="status-free">wolna</span>  }</span>
            </CardText>
            {dress.bustSize && (
              <CardText className="data-field">
                <span className="title">Biust: </span>
                <span>{dress?.bustSize} cm</span>
              </CardText>
            )}

            {dress.waistSize && (
              <CardText className="data-field">
                <span className="title">Talia: </span>
                <span> {dress?.waistSize} cm</span>
              </CardText>
            )}
            {dress.hipsSize && (
              <CardText className="data-field">
                <span className="title">Biodra: </span>
                <span> {dress?.hipsSize} cm</span>
              </CardText>
            )}
            {dress.heightSize && (
              <CardText className="data-field">
                <span className="title">Wzrost: </span>
                <span>{dress?.heightSize} cm</span>
              </CardText>
            )}
            <CardText>
              {rentAgreement.length > 0 && !checkIfFreeOrderStatus(rentAgreement) && (
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
              {closingSalesAgrement && (
                <Popup
                  content={<a href={`/zamówienia/wyprzedaż/${closingSalesAgrement.id}`}>Umowa {
                    dataFormat(closingSalesAgrement.agreementDate)
                  }</a>}
                  on="click"
                  pinned
                  trigger={
                    <Button
                      content={"Umowa wyprzedaży"}
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
              color="red"
              content="Wróć"
              onClick={HandleClick}
              icon="left arrow"
            />
            <Button
              basic
              color="green"
              content="Edytuj"
              as={NavLink}
              to={`/edytuj-suknie/${dress?.id}`}
              icon="edit"
            />
          </CardBody>
        </Card>
      )}
    </Fragment>
  );
};

export default DressDetails;
