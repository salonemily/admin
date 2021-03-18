import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Popup} from "semantic-ui-react";
import { RootStore } from "../../../stateManagment/store/store";
import {  NavLink } from "react-router-dom";
import { GetOneOrderDress } from "../../../stateManagment/action/dataManagment/OrderDressActions/OrderDressGetOneAction";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { format } from "date-fns";
const DressDetails = () => {
  const dress = useSelector((state: RootStore) => state.getOneOrderDressReducer.data);
  const dispatch = useDispatch();
  const HandleClick = () => {
    dispatch(GetOneOrderDress("", true, null));
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
              <span className="title">Kolor :</span>
              <span>{dress.color}</span>
            </CardText>
            <CardText className="data-field">
              <span className="title">Rozmiar:</span>
              <span>{dress.size}</span>
            </CardText>
            {dress.bustSize && (
              <CardText className="data-field">
                <span className="title">Biust :</span>
                <span>{dress?.bustSize} cm</span>
              </CardText>
            )}

            {dress.waistSize && (
              <CardText className="data-field">
                <span className="title">Talia :</span>
                <span> {dress?.waistSize} cm</span>
              </CardText>
            )}
            {dress.hipsSize && (
              <CardText className="data-field">
                <span className="title">Biodra :</span>
                <span> {dress?.hipsSize} cm</span>
              </CardText>
            )}
            {dress.heightSize && (
              <CardText className="data-field">
                <span className="title">Wzrost :</span>
                <span>{dress?.heightSize} cm</span>
              </CardText>
            )}
            <CardText>
              {dress.salesAgreement && (
                <Popup
                  content={<a href={`/zamówienia/sprzedaż/${dress.salesAgreement.id}`}>Umowa {
                    format( new Date( dress.salesAgreement.agreementDate.split("T")[0]),'dd.MM.yyyy')
                
                  }</a>}
                  on="click"
                  pinned
                  trigger={
                    <Button
                      content={"Umowa sprzedaży"}
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
              to={`/edycja-sukni-sprzedażowej/${dress?.id}`}
              icon="edit"
            />
          </CardBody>
        </Card>
      )}
    </Fragment>
  );
};

export default DressDetails;
