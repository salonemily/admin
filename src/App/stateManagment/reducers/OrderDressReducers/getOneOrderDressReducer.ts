import { CLOSE_ORDER_DRESS_DETAILS, FAIL_TO_GET_ONE_ORDER_DRESS, GetOneOrderDressType, GET_EXIST_ORDER_DRESS, GET_ONE_ORDER_DRESS } from "../../action/dataManagment/OrderDressActions/types/OrderDressActionType";
import { IDefaultStateOnaData } from "./types/reducersType";


const defaultState: IDefaultStateOnaData = {
  loading: false,
  data: null,
};

const getOneOrderDressReducer = (
  state: IDefaultStateOnaData = defaultState,
  action: GetOneOrderDressType
): IDefaultStateOnaData => {
  switch (action.type) {
    case GET_ONE_ORDER_DRESS:
      return (state = {
        data: action.payload,
        loading: true,
      });
      case GET_EXIST_ORDER_DRESS:
        return (state = {
          data: action.payload,
          loading: true,
        });
      case CLOSE_ORDER_DRESS_DETAILS:
      return (state = {
        data: null,
        loading: false
      });
    case FAIL_TO_GET_ONE_ORDER_DRESS:
      return (state = {
        data: null,
        loading: false,
      });
    default:
      return state;
  }
};

export default getOneOrderDressReducer;
