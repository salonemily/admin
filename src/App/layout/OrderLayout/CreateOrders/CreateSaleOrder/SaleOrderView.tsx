import React, { FormEvent, Fragment } from "react";
import { Header, Tab } from "semantic-ui-react";
import { IPostClient } from "../../../../models/clients";
import { IPostOrderDress } from "../../../../models/orderDress";
import { ISaleOrderPost } from "../../../../models/saleOrders";
import OrderProgress from "../common/OrderProgress";
import SaleDetailsForm from "./SaleOrderForm/SaleDetailsForm";
import SaleDressForm from "./SaleOrderForm/SaleDressForm";
import SaleOrderSummary from "./SaleOrderSummary";
import OrderClientForm from '../common/OrderClientForm'
import { ISaleOrderSummaryData, IsubmitState } from "../common/ordersAddons";
interface Iprops {
  handleClientSubmit: (values: any) => void;
  handleDressSubmit: (values: any) => void;
  handleOrderSubmit: (values: any) => void;
  handleMainSubmit: (values: any) => void;
  dress: IPostOrderDress;
  order: ISaleOrderPost;
  client: IPostClient;
  data: ISaleOrderSummaryData;
  handleOrderChange: (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleClientChange: (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleDressChange: (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  tabState: { activeIndex: number };
  onTabChange: (e: any, { activeIndex }: any) => void;
  submitState: IsubmitState;
}

const SaleOrderView: React.FC<Iprops> = ({
  handleClientSubmit,
  handleDressSubmit,
  handleOrderSubmit,
  dress,
  handleOrderChange,
  handleClientChange,
  handleDressChange,
  order,
  client,
  data,
  handleMainSubmit,
  onTabChange,
  tabState,
  submitState,
}) => {
  const {dresstype,clienttype} = data
  const { activeIndex } = tabState;
  const panes = [
    {
      menuItem: "Klient",
      render: () => (
        <Tab.Pane>
          <OrderClientForm
            submit={handleClientSubmit}
            handleInputChange={handleClientChange}
            client={client}
            submitState={submitState.isClientReady}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Suknia",
      render: () => (
        <Tab.Pane>
          <SaleDressForm
            submit={handleDressSubmit}
            dress={dress}
            handleInputChange={handleDressChange}
            submitState={submitState.isDressReady}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Zamówienie",
      render: () => (
        <Tab.Pane>
          <SaleDetailsForm
            submit={handleOrderSubmit}
            handleInputChange={handleOrderChange}
            order={order}
            submitState={submitState.isOrderReady}
          />
        </Tab.Pane>
      ),
    },
  ];
  if (data.dress && data.client && data.order) {
    panes.push({
      menuItem: "Podsumowanie",
      render: () => (
        <Tab.Pane>
          <SaleOrderSummary data={data} submit={handleMainSubmit} />
        </Tab.Pane>
      ),
    });
  }

  return (
    <Fragment>
      <Header as="h1" textAlign="center">
        Nowa umowa sprzedaży
      </Header>
      <OrderProgress submitState={submitState} dresstype={dresstype} clienttype={clienttype}/>
      <Tab
        menu={{ color: "orange", fluid: true, vertical: true, tabular: true }}
        panes={panes}
        activeIndex={activeIndex}
        onTabChange={onTabChange}
      />
    </Fragment>
  );
};

export default SaleOrderView;
