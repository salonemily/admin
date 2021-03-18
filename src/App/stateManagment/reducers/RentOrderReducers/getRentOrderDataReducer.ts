import {
    GetRentOrdersType,
    FAIL_TO_GET_RENT_ORDER_DATA,
    GET_RENT_ORDER_DATA
  } from "../../action/dataManagment/RentOrderActions/types/OrderActionType";
  import { IDefaultState } from "./types/orderReducersType";
  
  const defaultState: IDefaultState = {
    loading: false,
    data: null,
  };
  const getRentOrderData = (
    state: IDefaultState = defaultState,
    action: GetRentOrdersType
  ): IDefaultState => {
    switch (action.type) {
      case GET_RENT_ORDER_DATA:
        return (state = {
          data: action.payload,
          loading: true,
        });
      case FAIL_TO_GET_RENT_ORDER_DATA:
        return (state = {
          loading: false,
          data: null
        });
      default:
        return state;
    }
  };
  export default getRentOrderData;
  