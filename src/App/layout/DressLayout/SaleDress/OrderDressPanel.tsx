import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoaderComponent from "../../../utilities/LoaderComponent";
import { RootStore } from "../../../stateManagment/store/store";
import DressList from "./OrderDressList";
import OrderDressDetails from "./OrderDressDetails";
import { GetOrderDress } from "../../../stateManagment/action/dataManagment/OrderDressActions/OrderDressAction";
import { Col, Container, Row } from "reactstrap";

const DressPanel = () => {
    const isOpen = useSelector((state: RootStore) => state.getOneOrderDressReducer.loading);
    const state = useSelector((state: RootStore) => state.getOrderDressReducer.data)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(GetOrderDress);
    }, [dispatch]);
    if(!state)return<LoaderComponent content='Ładowanie sukni sprzedażowych' />
    
  return (
    <Container fluid={true}>
         <div className="header-conteiner"><h2>Suknie Sprzedażowe</h2></div>
         
    <Row className="row-conteiner">
      <Col sm="0" md="0" xl="3"></Col>
      <Col sm="12" md="12" xl="6">
        {" "}
        {state && <DressList />}
      </Col>
      <Col sm="0" md="0" xl="3">
        {" "}
        {isOpen && <OrderDressDetails />}
      </Col>
    </Row>
  </Container>
  );
};

export default DressPanel;
