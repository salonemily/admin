import { EditSaleOrderType, EDIT_SALE_ORDER, FAILED_TO_EDIT_SALE_ORDER } from "../../action/dataManagment/SaleOrderActions/types/SaleOrderActionType";
import { IDefaultStatePostData } from "./types/orderReducersType";

  
  const defaultState: IDefaultStatePostData = {
    isSuccesfull: false,
    isLoading: true,


  };
  
  const updateSaleOrderReducer = (
    state: IDefaultStatePostData = defaultState,
    action : EditSaleOrderType
  ): IDefaultStatePostData => {
    switch (action.type) {
      case   EDIT_SALE_ORDER:
        return (state = {
          isSuccesfull: true,
          isLoading: false,
        });
      case FAILED_TO_EDIT_SALE_ORDER:
        return (state = {
          isSuccesfull: false,
          isLoading: false,
        });
      default:
        return state;
    }
  };
  
  export default updateSaleOrderReducer;