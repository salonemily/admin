import {  EDIT_CLOSING_SALE_ORDER_STATUS, FAILED_TO_EDIT_CLOSING_SALE_ORDER_STATUS, UpdateStatusClosingSaleOrderType } from "../../action/dataManagment/ClosingSaleOrder/types/ClosingSaleOrderActionType";
import { IDefaultStatePostData } from "./types/orderReducersType";
  
  const defaultState: IDefaultStatePostData = {
    isSuccesfull: false,
    isLoading:true

  };
  
  const editClosingSaleOrderStatusReducer = (
    state: IDefaultStatePostData = defaultState,
    action : UpdateStatusClosingSaleOrderType
  ): IDefaultStatePostData => {
    switch (action.type) {
      case   EDIT_CLOSING_SALE_ORDER_STATUS:
        return (state = {
          isSuccesfull: true,
          isLoading:false
        });
      case FAILED_TO_EDIT_CLOSING_SALE_ORDER_STATUS:
        return (state = {
          isSuccesfull: false,
          isLoading:false
        });
      default:
        return {...state,isLoading:true};
    }
  };
  
  export default editClosingSaleOrderStatusReducer;