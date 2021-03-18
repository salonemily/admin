import { useSelector } from "react-redux";
import { Button, Table } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { RootStore } from "../../../../stateManagment/store/store";
import { enumClosingSaleConverter } from "../../../../utilities/enumConverter";
import { dataFormat } from "../../../../utilities/Additional";

const ClosingSaleOrderList = () => {
  const getState = useSelector(
    (state: RootStore) => state.getClosingSaleOrderDataReducer.data
  );


  const list = getState!.map((result) => {
    return (
      <Table.Row key={result.id}>
        <Table.Cell>{result.weddingDress.name}</Table.Cell>
        <Table.Cell>{result.weddingDress.producer}</Table.Cell>
        <Table.Cell>{dataFormat(result.weddingDate)}</Table.Cell>
        <Table.Cell>
          {result.client.name} {result.client.surname}
        </Table.Cell>
        <Table.Cell>{enumClosingSaleConverter(result.status)}</Table.Cell>
        <Table.Cell>
          <Button
            as={NavLink}
            to={`/zamówienia/wyprzedaż/${result.id}`}
            floated="right"
            icon="clipboard"
            content="Detale"
            labelPosition="left"
          ></Button>
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
          <Table.HeaderCell>Data ślubu</Table.HeaderCell>
          <Table.HeaderCell>Dane Klienta</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>
            <Button
              as={NavLink}
              to="/nowaUmowa/sprzedaż"
              content="Nowa umowa"
              icon="add"
              labelPosition="left"
              floated="right"
            />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{list}</Table.Body>
    </Table>
  );
};

export default ClosingSaleOrderList;
