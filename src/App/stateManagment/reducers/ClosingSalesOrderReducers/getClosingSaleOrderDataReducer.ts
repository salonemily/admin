import {
 GetClosingSaleOrdersType,
 FAILED_TO_GET_CLOSING_SALE_ORDER_DATA,
 GET_CLOSING_SALE_ORDER_DATA
} from "../../action/dataManagment/ClosingSaleOrder/types/ClosingSaleOrderActionType";
import { IDefaultState } from "./types/orderReducersType";

const defaultState: IDefaultState = {
  loading: false,
  data: null,
};
const getClosingSaleOrderDataReducer = (
  state: IDefaultState = defaultState,
  action: GetClosingSaleOrdersType
): IDefaultState => {
  switch (action.type) {
    case  GET_CLOSING_SALE_ORDER_DATA:
      return (state = {
        data: action.payload,
        loading: true,
      });
    case FAILED_TO_GET_CLOSING_SALE_ORDER_DATA:
      return (state = {
        loading: false,
        data: null,
      });
    default:
      return state;
  }
};
export default getClosingSaleOrderDataReducer;
