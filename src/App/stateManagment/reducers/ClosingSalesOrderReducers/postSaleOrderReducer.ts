import {
  CreateClosingSaleOrderType,
  CREATE_CLOSING_SALE_ORDER,
  FAILED_TO_CREATE_CLOSING_SALE_ORDER,
} from "../../action/dataManagment/ClosingSaleOrder/types/ClosingSaleOrderActionType";
import { IDefaultStatePostData } from "./types/orderReducersType";

const defaultState: IDefaultStatePostData = {
  isLoading: true,
  isSuccesfull:false
};

const postClosingSaleOrderReducer = (
  state: IDefaultStatePostData = defaultState,
  action: CreateClosingSaleOrderType
): IDefaultStatePostData => {
  switch (action.type) {
    case CREATE_CLOSING_SALE_ORDER:
      return (state = {
        isLoading: false,
        isSuccesfull:true
      });
    case FAILED_TO_CREATE_CLOSING_SALE_ORDER:
      return (state = {
        isLoading: false,
        isSuccesfull:false
      });
    default:
      return {...state,isLoading:true};
  }
};

export default postClosingSaleOrderReducer;
