import {  EDIT_RENT_ORDER_STATUS, FAILED_TO_EDIT_RENT_ORDER_STATUS, UpdateStatusRentOrderType } from "../../action/dataManagment/RentOrderActions/types/OrderActionType";
import { IDefaultStatePostData } from "./types/orderReducersType";
  
  const defaultState: IDefaultStatePostData = {
    isSuccesfull: false,
    isLoading:true

  };
  
  const editRentOrderStatusReducer = (
    state: IDefaultStatePostData = defaultState,
    action : UpdateStatusRentOrderType
  ): IDefaultStatePostData => {
    switch (action.type) {
      case   EDIT_RENT_ORDER_STATUS:
        return (state = {
          isSuccesfull: true,
          isLoading:false
        });
      case FAILED_TO_EDIT_RENT_ORDER_STATUS:
        return (state = {
          isSuccesfull: false,
          isLoading:false
        });
      default:
        return {...state,isLoading:true};
    }
  };
  
  export default editRentOrderStatusReducer;