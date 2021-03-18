import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "semantic-ui-react";
import { RootStore } from "../../../stateManagment/store/store";
import { DressGetOneAction } from "../../../stateManagment/action/dataManagment/SalonDressActions/DressGetOneAction";
import { NavLink } from "react-router-dom";
import TablePagination from "../../../utilities/TablePagination";
import ISalonDress from "../../../models/salonDress";
import { showStatus } from "../../../utilities/Additional";
const DressList = () => {
  const getState = useSelector((state: RootStore) => state.getDressData);
  const dispatch = useDispatch();
  const [currentList, setCurrentList] = useState<ISalonDress[]>(getState.data!.slice(0, 10));
  const HandleDetails = (id: string) => {
    dispatch(DressGetOneAction(id, false, getState.data));
  };
  useEffect(() => {
    if(getState.isLoading === false)
      setCurrentList(getState.data!.slice(0, 10))

  }, [getState.data, getState.isLoading])

  const maxPage= Math.ceil(getState.data!.length/10)
  const pageChange = (page: number) => {
    const list = getState.data!;
    let pageSort = (page-1)*10;
    setCurrentList(list.slice(pageSort, pageSort+10));
  };

  let list = currentList!.map((result: ISalonDress) => {
    const status = showStatus(result.rentAgreement,result.closingSalesAgrement)
    let table:any = []
    let word = ""
    if(status !== "Sprzedana" && status !== "Wolna")
    {
      table = status.map((result,index)=>{
      return(
      <Fragment key={index}>
      <span key={index}>{result}</span>
      <br/>
      </Fragment>
      )
    })}else 
       word = status
    return (
      <Table.Row key={result.id}>
        <Table.Cell>{result.producer}</Table.Cell>
        <Table.Cell>{result.name}</Table.Cell>
        <Table.Cell>{result.price}</Table.Cell>
        <Table.Cell>{result.color}</Table.Cell>
        <Table.Cell>
          {table.length>0 ? table : word}
        </Table.Cell>
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
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Producent</Table.HeaderCell>
            <Table.HeaderCell>Nazwa</Table.HeaderCell>
            <Table.HeaderCell>Cena</Table.HeaderCell>
            <Table.HeaderCell>Kolor</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>
              <Button
                as={NavLink}
                to="/nowa-suknia"
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
