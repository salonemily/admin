import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "semantic-ui-react";
import { GetClosingSalesOrders } from "../../../../stateManagment/action/dataManagment/ClosingSaleOrder/ClosingSaleOrderGetAction";
import { GetOneClosingSaleOrder } from "../../../../stateManagment/action/dataManagment/ClosingSaleOrder/ClosingSaleOrderGetOneAction";
import { RootStore } from "../../../../stateManagment/store/store";
import LoaderComponent from "../../../../utilities/LoaderComponent";
import OrderList from "./ClosingSaleOrderList";


const ClosingSaleOrderPanel = () => {
    const state = useSelector((state: RootStore) => state.getClosingSaleOrderDataReducer.data)

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(GetClosingSalesOrders);
      dispatch(GetOneClosingSaleOrder("", null,true));
    }, [dispatch]);
    if(!state)return<LoaderComponent content='Ładowanie ' />
  return (
    <Container fluid>
      <Grid >
      <Grid.Column width={4}>
        </Grid.Column>

        <Grid.Column width={8}>
        <div className="header-conteiner"><h2>Umowy Wyprzedaży</h2></div>
          {state &&<OrderList />}
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
      </Grid>
    </Container>
  );
};

export default ClosingSaleOrderPanel;
