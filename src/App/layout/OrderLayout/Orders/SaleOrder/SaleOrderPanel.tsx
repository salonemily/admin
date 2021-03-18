import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "semantic-ui-react";
import { GetSalesOrders } from "../../../../stateManagment/action/dataManagment/SaleOrderActions/SaleOrderGetAction";
import { GetOneSaleOrder } from "../../../../stateManagment/action/dataManagment/SaleOrderActions/SaleOrderGetOneAction";
import { RootStore } from "../../../../stateManagment/store/store";
import LoaderComponent from "../../../../utilities/LoaderComponent";
import Calendar from "./Calendar";
import OrderList from "./SaleOrderList";


const SaleOrderPanel = () => {
    const state = useSelector((state: RootStore) => state.getSaleOrderDataReducer.data)

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(GetSalesOrders);
      dispatch(GetOneSaleOrder("", null,true));
    }, [dispatch]);
    if(!state)return<LoaderComponent content='Ładowanie ' />
  return (
    <Container fluid>
      <Grid >
      <Grid.Column width={4}>
           <Calendar/>
        </Grid.Column>

        <Grid.Column width={8}>
        <div className="header-conteiner"><h2>Umowy Sprzedaży</h2></div>
          {state &&<OrderList />}
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
      </Grid>
    </Container>
  );
};

export default SaleOrderPanel;
