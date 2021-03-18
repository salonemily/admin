import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "semantic-ui-react";
import { GetRentOrder } from "../../../../stateManagment/action/dataManagment/RentOrderActions/RentOrderGetAction";
import { GetDress } from "../../../../stateManagment/action/dataManagment/SalonDressActions/DressAction";
import { RootStore } from "../../../../stateManagment/store/store";
import LoaderComponent from "../../../../utilities/LoaderComponent";
import OrderList from "./RentOrderList";


const RentOrderPanel = () => {
    const state = useSelector((state: RootStore) => state.getRentOrderData.data)

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(GetRentOrder);
    }, [dispatch]);
    if(!state)return<LoaderComponent content='Ładowanie Sukni' />
  return (
    <Container fluid>
      <Grid >
      <Grid.Column width={4}>
        </Grid.Column>
        <Grid.Column width={8}>
        <div className="header-conteiner"><h2>Umowy wypożyczenia</h2></div>
          {state &&<OrderList />}
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
      </Grid>
    </Container>
  );
};

export default RentOrderPanel;
