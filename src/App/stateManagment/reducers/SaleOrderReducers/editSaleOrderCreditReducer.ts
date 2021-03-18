import {
  EDIT_SALE_ORDER_PRICE,
  FAILED_TO_EDIT_SALE_ORDER_PRICE,
  UpdateCreditSaleOrderType,
} from "../../action/dataManagment/SaleOrderActions/types/SaleOrderActionType";
import { IDefaultStatePostData } from "./types/orderReducersType";

const defaultState: IDefaultStatePostData = {
  isSuccesfull: false,
  isLoading: true,
};

const editRentOrderCreditReducer = (
  state: IDefaultStatePostData = defaultState,
  action: UpdateCreditSaleOrderType
): IDefaultStatePostData => {
  switch (action.type) {
    case EDIT_SALE_ORDER_PRICE:
      return (state = {
        isSuccesfull: true,
        isLoading: false,
        
      });
    case FAILED_TO_EDIT_SALE_ORDER_PRICE:
      return (state = {
        isSuccesfull: false,
        isLoading: false,
      });
    default:
      return { ...state, isLoading: true };
  }
};

export default editRentOrderCreditReducer;
