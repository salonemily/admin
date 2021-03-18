import { EditOrderDressType, EDIT_ORDER_DRESS, FAIL_TO_EDIT_ORDER_DRESS } from "../../action/dataManagment/OrderDressActions/types/OrderDressActionType";
import { IDefaultStatePostData } from "./types/reducersType";
  
  const defaultState: IDefaultStatePostData = {
    isSuccesfull: false,
  };
  
  const updateOrderDressReducers = (
    state: IDefaultStatePostData = defaultState,
    action : EditOrderDressType
  ): IDefaultStatePostData => {
    switch (action.type) {
      case   EDIT_ORDER_DRESS:
        return (state = {
          isSuccesfull: true,
        });
      case FAIL_TO_EDIT_ORDER_DRESS:
        return (state = {
          isSuccesfull: false,
        });
      default:
        return state;
    }
  };
  
  export default updateOrderDressReducers;