import { DeleteOrderDressType, DELETE_ORDER_DRESS, FAIL_TO_DELETE_ORDER_DRESS } from "../../action/dataManagment/OrderDressActions/types/OrderDressActionType";
import { IDefaultStatePostData } from "./types/reducersType";

  const defaultState: IDefaultStatePostData = {
    isSuccesfull: false,
  };
  
  const deleteOrderDressReducer = (
    state: IDefaultStatePostData = defaultState,
    action : DeleteOrderDressType
  ): IDefaultStatePostData => {
    switch (action.type) {
      case DELETE_ORDER_DRESS:
        return (state = {
          isSuccesfull: true,
        });
      case FAIL_TO_DELETE_ORDER_DRESS:
        return (state = {
          isSuccesfull: false,
        });
      default:
        return state;
    }
  };
  
  export default deleteOrderDressReducer;
  