import {
  FAILED_TO_GET_SALE_ORDER_DATA,
  GetSaleOrdersType,
  GET_SALE_ORDER_DATA,
} from "../../action/dataManagment/SaleOrderActions/types/SaleOrderActionType";
import { IDefaultState } from "./types/orderReducersType";

const defaultState: IDefaultState = {
  loading: false,
  data: null,
};
const getSaleOrderDataReducer = (
  state: IDefaultState = defaultState,
  action: GetSaleOrdersType
): IDefaultState => {
  switch (action.type) {
    case GET_SALE_ORDER_DATA:
      return (state = {
        data: action.payload,
        loading: true,
      });
    case FAILED_TO_GET_SALE_ORDER_DATA:
      return (state = {
        loading: false,
        data: null,
      });
    default:
      return state;
  }
};
export default getSaleOrderDataReducer;
