import { EDIT_CLOSING_SALE_ORDER, FAILED_TO_EDIT_CLOSING_SALE_ORDER, UpdateClosingSaleOrderType } from "../../action/dataManagment/ClosingSaleOrder/types/ClosingSaleOrderActionType";
import { IDefaultStatePostData } from "./types/orderReducersType";

const defaultState: IDefaultStatePostData = {
  isSuccesfull: false,
  isLoading: true,
};

const updateSaleOrderReducer = (
  state: IDefaultStatePostData = defaultState,
  action: UpdateClosingSaleOrderType
): IDefaultStatePostData => {
  switch (action.type) {
    case EDIT_CLOSING_SALE_ORDER:
      return (state = {
        isSuccesfull: true,
        isLoading:false
      });
    case FAILED_TO_EDIT_CLOSING_SALE_ORDER:
      return (state = {
        isSuccesfull: false,
        isLoading:false
      });
    default:
      return {...state,isLoading:true};
  }
};

export default updateSaleOrderReducer;
