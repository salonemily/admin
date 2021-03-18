import {
  FAIL_TO_GET_ORDER_DRESSES,
  GetOrderDressType,
  GET_ORDER_DRESSES,
} from "../../action/dataManagment/OrderDressActions/types/OrderDressActionType";
import { IDefaultState } from "./types/reducersType";

const defaultState: IDefaultState = {
  loading: false,
  data: null,
};
const getOrderDressDataReducer = (
  state: IDefaultState = defaultState,
  action: GetOrderDressType
): IDefaultState => {
  switch (action.type) {
    case GET_ORDER_DRESSES:
      return (state = {
        data: action.payload,
        loading: true,
      });
    case FAIL_TO_GET_ORDER_DRESSES:
      return (state = {
        loading: false,
        data: null,
      });
    default:
      return state;
  }
};
export default getOrderDressDataReducer;
