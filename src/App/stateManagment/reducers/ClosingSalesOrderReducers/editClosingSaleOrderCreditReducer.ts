import {  EDIT_CLOSING_SALE_ORDER_PRICE, FAILED_TO_EDIT_CLOSING_SALE_ORDER_PRICE, UpdateCreditClosingSaleOrderType } from "../../action/dataManagment/ClosingSaleOrder/types/ClosingSaleOrderActionType";
import { IDefaultStatePostData } from "./types/orderReducersType";
  
  const defaultState: IDefaultStatePostData = {
    isSuccesfull: false,
    isLoading:true,

  };
  
  const editClosingSaleOrderCreditReducer = (
    state: IDefaultStatePostData = defaultState,
    action : UpdateCreditClosingSaleOrderType
  ): IDefaultStatePostData => {
    switch (action.type) {
      case   EDIT_CLOSING_SALE_ORDER_PRICE:
        return (state = {
          isSuccesfull: true,
          isLoading:false,
        });
      case FAILED_TO_EDIT_CLOSING_SALE_ORDER_PRICE:
        return (state = {
          isSuccesfull: false,
          isLoading:false,
        });
      default:
        return {...state,isLoading:true};
    }
  };
  
  export default editClosingSaleOrderCreditReducer;