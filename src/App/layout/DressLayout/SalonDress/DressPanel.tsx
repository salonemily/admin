import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoaderComponent from "../../../utilities/LoaderComponent";
import DressDetails from "./DressDetails";
import DressList from "./DressList";
import { Container, Col, Row } from "reactstrap";
import DressFilter from "./DressFilter";
import { GetDress } from "../../../stateManagment/action/dataManagment/SalonDressActions/DressAction";
import { RootStore } from "../../../stateManagment/store/store";
import { MenuItemProps } from "semantic-ui-react";
import { stubTrue } from "lodash";

const DressPanel = () => {
  const isOpen = useSelector((store: RootStore) => store.getOneDress.data);
  const dress = useSelector((store: RootStore) => store.getDressData.data);
  const isLoading = useSelector((store: RootStore) => store.getDressData.isLoading);
  const [state, setState]:any = useState({activeItem: ""})

  const {activeItem} = state
  const dispatch = useDispatch();
  useEffect(() => {
    if(activeItem === "free")dispatch(GetDress(true,false,false,false,false))
    else if(activeItem === "rent")dispatch(GetDress(false,true,false,false,false))
    else if(activeItem === "rentp")dispatch(GetDress(false,false,true,false,false))
    else if(activeItem === "order")dispatch(GetDress(false,false,false,true,false))
    else if(activeItem === "sold")dispatch(GetDress(false,false,false,false,true))
    else dispatch(GetDress());
  }, [dispatch,state]);
  
  const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: MenuItemProps) =>{
    setState({...state,activeItem:data.name})
}
  if (!dress) return <LoaderComponent content="Ładowanie Sukni" />;
  return (
    <Container fluid={true}>

      <div className="header-conteiner">
        <h2>Suknie Salonowe</h2>
      </div>
      <Row className="row-conteiner">
        <Col sm="0" md="0" xl="2"></Col>
        <Col sm="12" md="12" xl="8">
        <DressFilter handleItemClick={handleItemClick}activeItem={activeItem}/>
          {" "}
          {dress && <DressList />}
        </Col>
        <Col sm="0" md="0" xl="2">
          {" "}
          {isOpen && <DressDetails />}
        </Col>
      </Row>
    </Container>
  );
};

export default DressPanel;
