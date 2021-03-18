import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoaderComponent from "../../utilities/LoaderComponent";
import { GetClient } from "../../stateManagment/action/dataManagment/ClientActions/ClientGetAction";
import { RootStore } from "../../stateManagment/store/store";
import ClientDetails from "./ClientDetails";
import ClientList from "./ClientList";
import { Container, Row, Col } from 'reactstrap';


const ClientPanel = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state.getClientData.data);
    const isOpen = useSelector((state: RootStore) => state.getOneClient.data);
    useEffect(() => {
      dispatch(GetClient);

    }, [dispatch]);
    if(!state)return<LoaderComponent content='Ładowanie Klientów' />
  return (
    <Container fluid={true} >
       <div className="header-conteiner"><h2>Klientki</h2></div>
      <Row className="row-conteiner">
        <Col  sm="0" md="0" xl="3"></Col>
        <Col  sm="12" md="12" xl="6"><ClientList /></Col>
        <Col  sm="0" md="0" xl="3"> {isOpen && <ClientDetails />}</Col>
      </Row>
       

      
    </Container>
  );
};

export default ClientPanel;
