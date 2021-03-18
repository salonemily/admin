import { Fragment } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import DressForm from "./layout/DressLayout/DressForm/DressForm";
import DressPanel from "./layout/DressLayout/SalonDress/DressPanel";
import HomePage from "./layout/MainPage/HomePage";
import ClientPanel from "./layout/ClientLayout/ClientPanel";
import ClientForm from "./layout/ClientLayout/ClientForm/ClientForm";
import NotFound from "./utilities/NotFound";
import NavBar from "./layout/NavBar";
import CreateRentOrder from "./layout/OrderLayout/CreateOrders/CreateRentOrders/RendOrderLogic"
import CreateSaleOrder from "./layout/OrderLayout/CreateOrders/CreateSaleOrder/SaleOrderLogic";
import SaleOrderDetails from "./layout/OrderLayout/Orders/SaleOrder/SaleOrderDetails";
import RentOrderDetails from "./layout/OrderLayout/Orders/RentOrder/RentOrderDetails";
import RentOrderPanel from "./layout/OrderLayout/Orders/RentOrder/RentOrderPanel";
import SaleOrderPanel from "./layout/OrderLayout/Orders/SaleOrder/SaleOrderPanel";
import OrderDressPanel from "./layout/DressLayout/SaleDress/OrderDressPanel";
import OrderDressForm from "./layout/DressLayout/DressForm/OrderDressForm";
import SaleOrderEditForm from "./layout/OrderLayout/Orders/SaleOrder/SaleOrderEditForm";
import ClosingSaleOrderPanel from "./layout/OrderLayout/Orders/ClosingSaleOrder/ClosingSaleOrderPanel";
import ClosingSaleOrderDetails from "./layout/OrderLayout/Orders/ClosingSaleOrder/ClosingSaleOrderDetails";
import CreateClosingSaleOrder from "./layout/OrderLayout/CreateOrders/CreateClosingSaleOrders/ClosingSaleOrderLogic";
import ClosingSaleOrderEditForm from "./layout/OrderLayout/Orders/ClosingSaleOrder/ClosingSaleOrderEditForm";
import RentOrderEditForm from "./layout/OrderLayout/Orders/RentOrder/RentOrderEditForm";

const Routing = () => {
  const location = useLocation();
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <NavBar/>
            <Switch>
              <Route path="/suknie-salonowe"  key={location.key} component={DressPanel} />
              <Route path="/suknie-sprzedażowe"  key={location.key} component={OrderDressPanel} />
              <Route path="/klientki" component={ClientPanel} />
              <Route
                path={["/nowyKlient", "/edycjaKlienta/:id"]}
                component={ClientForm}
              />
              <Route exact path="/zamówienia/wypożyczenie" component={RentOrderPanel} />
              <Route exact path="/zamówienia/wypożyczenie/:id" component={RentOrderDetails} />
              <Route exact path="/zamówienia/sprzedaż" component={SaleOrderPanel} />
              <Route exact path="/zamówienia/sprzedaż/:id" component={SaleOrderDetails} key={location.key}/>
              <Route exact path="/zamówienia/wyprzedaż" component={ClosingSaleOrderPanel} />
              <Route exact path="/zamówienia/wyprzedaż/:id" component={ClosingSaleOrderDetails} />
              <Route exact path="/zamówienia/sprzedaż" component={SaleOrderPanel} />
              <Route exact path="/zamówienia/sprzedaż/:id" component={SaleOrderDetails} key={location.key}/>
              <Route exact path="/zamówienia/sprzedaż/edytujDetale/:id" component={SaleOrderEditForm} />
              <Route exact path="/zamówienia/wyprzedaż/edytujDetale/:id" component={ClosingSaleOrderEditForm} />
              <Route exact path="/zamówienia/wypożyczenie/edytujDetale/:id" component={RentOrderEditForm} />
              <Route exact path="/noweWypożyczenie" component={CreateRentOrder} />
              <Route exact path="/nowaSprzedaż" component={CreateSaleOrder} />
              <Route exact path="/nowaWyprzedaż" component={CreateClosingSaleOrder} />
              <Route exact path="/edycja-sukni-sprzedażowej/:id" component={OrderDressForm} />
              <Route path={["/nowa-suknia", "/edytuj-suknie/:id"]} key={location.key} component={DressForm} />
              <Route component={NotFound} />
            </Switch>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default Routing;
