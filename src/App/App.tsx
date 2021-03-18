import React, { Fragment, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import 'react-toastify/dist/ReactToastify.css';
import Routing from "./Routing";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "./stateManagment/action/dataManagment/UserActions/GetUserAction";
import { RootStore } from "./stateManagment/store/store";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStore) => state.loginReducer.isLoggin);
  useEffect(() => {
    if(localStorage.getItem("jwt") || user)
    {
      dispatch(GetUser())
    }
    
  }, [dispatch,user])
  return (
    <Fragment>
      <ToastContainer position='bottom-right' />
      <Routing />
    </Fragment>
  );
}
export default App;
