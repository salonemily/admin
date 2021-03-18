import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IClient, { ClientFormValues } from "../../../../models/clients";
import {
  ISaleOrderPost,
} from "../../../../models/saleOrders";
import { GetClient } from "../../../../stateManagment/action/dataManagment/ClientActions/ClientGetAction";
import { GetDress } from "../../../../stateManagment/action/dataManagment/SalonDressActions/DressAction";
import { RootStore } from "../../../../stateManagment/store/store";
import {
  checkIfTheSame,
  CreateFormTypeEnum,
} from "../../../../utilities/Additional";
import { v4 as uuid } from "uuid";
import { Segment } from "semantic-ui-react";
import LoaderComponent from "../../../../utilities/LoaderComponent";
import RentOrderView from "./RentOrderView";
import { DressFormValues } from "../../../../models/salonDress";
import { RentOrderFormValues } from "../../../../models/rentOrders";
import { RentOrderSummaryData, submitStateInit } from "../common/ordersAddons";
import { PostRentOrder } from "../../../../stateManagment/action/dataManagment/RentOrderActions/RentOrderPostAction";

const CreateRentOrder = () => {
  const dispatch = useDispatch();
  const DressList = useSelector((state: RootStore) => state.getDressData.data);
  const ClientsList = useSelector(
    (state: RootStore) => state.getClientData.data
  );
  const dressSearcher = useSelector(
    (state: RootStore) => state.dressSearchReducer.clearing
  );
  const clientSearcher = useSelector(
    (state: RootStore) => state.clientSearchReducer.clearing
  );
  const postOrder = useSelector(
    (state: RootStore) => state.postRentOrderReducer
  );
  const OneDress = useSelector((state: RootStore) => state.getOneDress.data);
  const OneClient = useSelector((state: RootStore) => state.getOneClient.data);
  const [dress, setDress] = useState(new DressFormValues());
  const [client, setClient] = useState(new ClientFormValues());
  const [order, setOrder] = useState(new RentOrderFormValues());
  const [data, setData] = useState(new RentOrderSummaryData());
  const [submitState, setSubmitState] = useState(submitStateInit);
  const [tabState, setTabState] = useState({ activeIndex: 0 });
  const [loading, setloading] = useState(false)
  const { isClientReady, isDressReady, isOrderReady } = submitState;

  const onTabChange = (e: any, { activeIndex }: any) => {
    setTabState({ ...tabState, activeIndex: activeIndex });
  };

  useEffect(() => {
    if (!ClientsList) {
      dispatch(GetClient);
      dispatch(GetDress());
    }
    if (!dressSearcher && OneDress) setDress(new DressFormValues(OneDress));
    else if (dressSearcher) {
      setDress(new DressFormValues());
      if(isDressReady === true)setSubmitState({...submitState,isDressReady:false})
    }

    if (!clientSearcher && OneClient) {
      setClient(OneClient);
    }else if (clientSearcher) {
      setClient(new ClientFormValues())
      if(isClientReady === true)setSubmitState({...submitState,isClientReady:false})
      
    }
    if(!postOrder.isSuccesfull && !postOrder.isLoading)
       setloading(false);
    
  }, [
    dispatch,
    OneDress,
    dressSearcher,
    DressList,
    setDress,
    clientSearcher,
    OneClient,
    ClientsList,
    postOrder,
    isClientReady,
    isDressReady,
    submitState
  ]);

  const handleDressChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setDress({ ...dress, [name]: value });
    if (isDressReady) setSubmitState({ ...submitState, isDressReady: false });
  };

  const handleClientChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setClient({ ...client, [name]: value });
    if (isClientReady) setSubmitState({ ...submitState, isClientReady: false });
  };

  const handleOrderChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setOrder({ ...order, [name]: value });
    if (isOrderReady) setSubmitState({ ...submitState, isOrderReady: false });
  };

  const handleClientSubmit = (values: IClient) => {
    if (!client.id) {
      let newClient = {
        ...values,
        id: uuid(),
      };
      setData({
        ...data,
        client: newClient,
        clienttype: CreateFormTypeEnum.New,
      });
    }
    if (OneClient && client.id) {
      if (checkIfTheSame(client, OneClient)) {
        setData({
          ...data,
          client: client,
          clienttype: CreateFormTypeEnum.Exist,
        });
      } else {
        setData({
          ...data,
          client: client,
          clienttype: CreateFormTypeEnum.Edit,
        });
      }
    }
    setSubmitState({ ...submitState, isClientReady: true });
    setTabState({ activeIndex: 1 });
  };

  const handleDressSubmit = () => {
    if (!dress.id) {
      let newDress = {
        ...dress,
        id: uuid(),
      };
      setData({ ...data, dress: newDress, dresstype: CreateFormTypeEnum.New });
    }
    if (OneDress && dress.id) {
      if (checkIfTheSame(dress, OneDress)) {
        setData({
          ...data,
          dress: dress,
          dresstype: CreateFormTypeEnum.Exist,
        });
      } else {
        setData({
          ...data,
          dress: dress,
          dresstype: CreateFormTypeEnum.Edit,
        });
      }
    }
    setTabState({ activeIndex: 2 });
    setSubmitState({ ...submitState, isDressReady: true });
  };
  const handleOrderSubmit = (values: ISaleOrderPost) => {

    let creditResult = values.totalPrice! - values.deposit!;
    let neworder = {
      ...values,
      id: uuid(),
      credit: creditResult,
    };
    setData({ ...data, order: neworder });
    setTabState({ activeIndex: 3 });
    setSubmitState({ ...submitState, isOrderReady: true });
  };


  const handleMainSubmit = () => {
    setloading(true)
    const {
      order: dataOrder,
      dress: dataDress,
      client: dataClient,
      clienttype,
      dresstype,
    } = data;
    if (dataOrder && dataDress && dataClient) {
      setData({ ...data });
      let orderwithID = {
        ...dataOrder,
        dressID: dataDress.id,
        clientID: dataClient.id,
      };
      dispatch(
        PostRentOrder(orderwithID, dataClient, dataDress, clienttype, dresstype)
      );
    }
  };


  if (!ClientsList && !DressList)
    return <LoaderComponent content="Ładowanie fromularzy" />;
  if(loading)
     return <LoaderComponent content="Tworzenie zamówienia" />;
  return (
    <Segment className="create-order-segment">
      <RentOrderView
        handleClientSubmit={handleClientSubmit}
        handleDressSubmit={handleDressSubmit}
        handleOrderSubmit={handleOrderSubmit}
        handleMainSubmit={handleMainSubmit}
        handleOrderChange={handleOrderChange}
        handleDressChange={handleDressChange}
        handleClientChange={handleClientChange}
        tabState={tabState}
        onTabChange={onTabChange}
        submitState={submitState}
        dress={dress}
        order={order}
        client={client}
        data={data}
      />
    </Segment>
  );
};

export default CreateRentOrder;
