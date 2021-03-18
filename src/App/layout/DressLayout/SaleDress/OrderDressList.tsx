import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "semantic-ui-react";
import { RootStore } from "../../../stateManagment/store/store";
import { GetOneOrderDress } from "../../../stateManagment/action/dataManagment/OrderDressActions/OrderDressGetOneAction";
import { enumSaleConverter } from "../../../utilities/enumConverter";
const DressList = () => {
  const orderDress = useSelector((state: RootStore) => state.getOrderDressReducer.data);
  const dispatch = useDispatch();
  const HandleDetails = (id: string) => {
    dispatch(GetOneOrderDress(id, false, orderDress));
   
  };
  const list = orderDress!.map((result) => {
    return (
      <Table.Row key={result.id}>
        <Table.Cell>{result.producer}</Table.Cell>
        <Table.Cell>{result.name}</Table.Cell>
        <Table.Cell>{result.color}</Table.Cell>
        <Table.Cell>{result.salesAgreement.totalPrice}</Table.Cell>
        <Table.Cell>{result.salesAgreement ? enumSaleConverter(result.salesAgreement.status) : "Wolna"  } </Table.Cell>
        <Table.Cell>
          <Button
            floated="right"
            icon="clipboard"
            content="Detale"
            labelPosition="left"
            name={result.id}
            onClick={() => {
              HandleDetails(result.id);
            }}
          >
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  });

  return (
    <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nazwa</Table.HeaderCell>
          <Table.HeaderCell>Producent</Table.HeaderCell>
          <Table.HeaderCell>Cena</Table.HeaderCell>
          <Table.HeaderCell>Kolor</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
      
        </Table.Row>
      </Table.Header>
      <Table.Body>{list}</Table.Body>
    </Table>
  );
};

export default DressList;
