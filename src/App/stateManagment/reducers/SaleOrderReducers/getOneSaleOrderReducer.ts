import {
  CLOSE_ONE_SALE_ORDER,
  FAILED_TO_GET_ONE_SALE_ORDER,
  GetOneSaleOrdersType,
  GET_EXIST_SALE_ORDER_DATA,
  GET_ONE_SALE_ORDER,
} from "../../action/dataManagment/SaleOrderActions/types/SaleOrderActionType";
import { IDefaultStateOnaData } from "./types/orderReducersType";
const defaultState: IDefaultStateOnaData = {
  isLoading: true,
  data: null,
  isSuccesfull:false
};
const getOneSaleOrderReducer = (
  state: IDefaultStateOnaData = defaultState,
  action: GetOneSaleOrdersType
): IDefaultStateOnaData => {
  switch (action.type) {
    case GET_ONE_SALE_ORDER:
      return (state = {
        data: action.payload,
        isLoading: false,
        isSuccesfull:true
      });
      case CLOSE_ONE_SALE_ORDER:
      return (state = {
        data: null,
        isLoading: false,
        isSuccesfull:true
      });
    case GET_EXIST_SALE_ORDER_DATA:
      return (state = {
        data: action.payload,
        isLoading: false,
        isSuccesfull:true
      });
    case FAILED_TO_GET_ONE_SALE_ORDER:
      return { ...state, isSuccesfull:false };
    default:
      return {...state,isLoading:true};
  }
};

export default getOneSaleOrderReducer;
