import { EditSaleOrderStatusType, EDIT_SALE_ORDER_STATUS, FAILED_TO_EDIT_SALE_ORDER_STATUS } from "../../action/dataManagment/SaleOrderActions/types/SaleOrderActionType";
import { IDefaultStatePostData } from "./types/orderReducersType";
  
const defaultState: IDefaultStatePostData = {
  isSuccesfull: false,
  isLoading: true,
};
  const editSaleOrderStatusReducer = (
    state: IDefaultStatePostData = defaultState,
    action : EditSaleOrderStatusType
  ): IDefaultStatePostData => {
    switch (action.type) {
      case   EDIT_SALE_ORDER_STATUS:
        return (state = {
          isSuccesfull: true,
          isLoading: false,
        });
      case FAILED_TO_EDIT_SALE_ORDER_STATUS:
        return (state = {
          isSuccesfull: false,
          isLoading: false,
        });
      default:
        return state;
    }
  };
  
  export default editSaleOrderStatusReducer;