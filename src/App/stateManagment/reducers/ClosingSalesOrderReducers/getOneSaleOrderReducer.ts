import {
  GET_ONE_CLOSING_SALE_ORDER,
  FAILED_TO_GET_ONE_CLOSING_SALE_ORDER,
  GET_EXIST_CLOSING_SALE_ORDER_DATA,
  GetOneClosingSaleOrdersType,
  CLOSE_CLOSING_SALES_DETAILS
} from "../../action/dataManagment/ClosingSaleOrder/types/ClosingSaleOrderActionType";
import { IDefaultStateOnaData } from "./types/orderReducersType";
const defaultState: IDefaultStateOnaData = {
  isLoading: true,
  data: null,
  isSuccesfull:false
};
const getOneClosingSaleOrderReducer = (
  state: IDefaultStateOnaData = defaultState,
  action: GetOneClosingSaleOrdersType
): IDefaultStateOnaData => {
  switch (action.type) {
    case GET_ONE_CLOSING_SALE_ORDER:
      return (state = {
        data: action.payload,
        isLoading: false,
        isSuccesfull:true
      });
      case CLOSE_CLOSING_SALES_DETAILS:
      return (state = {
        data: null,
        isLoading: false,
        isSuccesfull:true
      });
    case GET_EXIST_CLOSING_SALE_ORDER_DATA:
      return (state = {
        data: action.payload,
        isLoading: false,
        isSuccesfull:true
      });
    case FAILED_TO_GET_ONE_CLOSING_SALE_ORDER:
      return { ...state, isSuccesfull:false };
    default:
      return {...state,isLoading:true};
  }
};

export default getOneClosingSaleOrderReducer;
