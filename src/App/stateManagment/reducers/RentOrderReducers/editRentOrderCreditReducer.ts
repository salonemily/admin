import {
  EDIT_RENT_ORDER_PRICE,
  FAILED_TO_EDIT_RENT_ORDER_PRICE,
  UpdateCreditRentOrderType,
} from "../../action/dataManagment/RentOrderActions/types/OrderActionType";
import {  IDefaultStatePostData } from "./types/orderReducersType";

const defaultState: IDefaultStatePostData = {
  isSuccesfull: false,
  isLoading: true,
};

const editRentOrderCreditReducer = (
  state: IDefaultStatePostData = defaultState,
  action: UpdateCreditRentOrderType
): IDefaultStatePostData => {
  switch (action.type) {
    case EDIT_RENT_ORDER_PRICE:
      return (state = {
        isSuccesfull: true,
        isLoading: false,
      });
    case FAILED_TO_EDIT_RENT_ORDER_PRICE:
      return (state = {
        isSuccesfull: false,
        isLoading: false,
      });
    default:
      return { ...state, isLoading: true };
  }
};

export default editRentOrderCreditReducer;
