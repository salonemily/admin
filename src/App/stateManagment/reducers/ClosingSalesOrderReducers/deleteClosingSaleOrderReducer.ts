import { DeleteClosingSaleOrdersType, DELETE_CLOSING_SALE_ORDER, FAILED_TO_DELETE_CLOSING_SALE_ORDER } from "../../action/dataManagment/ClosingSaleOrder/types/ClosingSaleOrderActionType";
import { IDefaultStatePostData } from "./types/orderReducersType";

    
    const defaultState: IDefaultStatePostData = {
      isSuccesfull: false,
      isLoading:true
    };
    
    const deleteClosingSaleOrderReducer = (
      state: IDefaultStatePostData = defaultState,
      action : DeleteClosingSaleOrdersType
    ): IDefaultStatePostData => {
      switch (action.type) {
        case DELETE_CLOSING_SALE_ORDER:
          return (state = {
            isSuccesfull: true,
            isLoading:false
          });
        case FAILED_TO_DELETE_CLOSING_SALE_ORDER:
          return (state = {
            isSuccesfull: false,
            isLoading:false
          });
        default:
          return state;
      }
    };
    
    export default deleteClosingSaleOrderReducer;
    