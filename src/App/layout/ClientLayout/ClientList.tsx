import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "semantic-ui-react";
import { RootStore } from "../../stateManagment/store/store";
import { NavLink } from "react-router-dom";
import { GetOneClient } from "../../stateManagment/action/dataManagment/ClientActions/ClientGetOneAction";
import TablePagination from "../../utilities/TablePagination";
import ClientSearch from "../OrderLayout/CreateOrders/Searchbars/ClientSearch";
const DressList = () => {
  const getState = useSelector((state: RootStore) => state.getClientData);
  const dispatch = useDispatch();
  const maxPage= Math.ceil(getState.data!.length/10)
  const HandleDetails = (id: string) => {
    dispatch(GetOneClient(id, false, getState.data));
  };
  const [currentList, setCurrentList] = useState(getState.data?.slice(0, 10));
  useEffect(() => {
    if(getState.isLoading === false)
      setCurrentList(getState.data!.slice(0, 10))

  }, [getState.data, getState.isLoading])
  const pageChange = (page: number) => {
    const list = getState.data!;
    let pageSort = (page-1)*10;
    setCurrentList(list.slice(pageSort, pageSort+10));
  };
  const list = currentList!.map((result) => {
    return (
      <Table.Row key={result.id}>
        <Table.Cell>{result.name}</Table.Cell>
        <Table.Cell>{result.surname}</Table.Cell>
        <Table.Cell>{result.email}</Table.Cell>
        <Table.Cell>{result.phoneNumber}</Table.Cell>
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
          ></Button>
        </Table.Cell>
      </Table.Row>
    );
  });

  return (
   
    <Fragment>
       <ClientSearch/>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Imię</Table.HeaderCell>
            <Table.HeaderCell>Nazwisko</Table.HeaderCell>
            <Table.HeaderCell>Adres Email</Table.HeaderCell>
            <Table.HeaderCell>Numer Telefonu</Table.HeaderCell>
            <Table.HeaderCell>
              {" "}
              <Button
                as={NavLink}
                to="/nowyKlient"
                content="Dodaj"
                icon="add"
                labelPosition="left"
                floated="right"
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{list}</Table.Body>
      </Table>
      <TablePagination pageChange={pageChange} maxItem={maxPage}/>
    </Fragment>
  );
};

export default DressList;
