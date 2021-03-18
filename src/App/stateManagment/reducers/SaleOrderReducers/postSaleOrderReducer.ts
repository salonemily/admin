import { CreateSaleOrderType, CREATE_SALE_ORDER, FAILED_TO_CREATE_SALE_ORDER } from "../../action/dataManagment/SaleOrderActions/types/SaleOrderActionType";
import { IDefaultStatePostData } from "./types/orderReducersType";

  
  const defaultState: IDefaultStatePostData = {
    isSuccesfull: false,
    isLoading: true,
  };
  
  const postSaleOrderReducer = (
    state: IDefaultStatePostData = defaultState,
    action : CreateSaleOrderType
  ): IDefaultStatePostData => {
    switch (action.type) {
      case CREATE_SALE_ORDER:
        return (state = {
          isSuccesfull: true,
          isLoading: false,
        });
      case FAILED_TO_CREATE_SALE_ORDER:
        return (state = {
          isSuccesfull: false,
          isLoading: false,
        });
      default:
        return state;
    }
  };
  
  export default postSaleOrderReducer;
  