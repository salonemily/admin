import { DeleteSaleOrdersType, DELETE_SALE_ORDER, FAILED_TO_DELETE_SALE_ORDER } from "../../action/dataManagment/SaleOrderActions/types/SaleOrderActionType";
import { IDefaultStatePostData } from "./types/orderReducersType";

    
    const defaultState: IDefaultStatePostData = {
      isSuccesfull: false,
      isLoading:true
    };
    
    const deleteSaleOrderReducer = (
      state: IDefaultStatePostData = defaultState,
      action : DeleteSaleOrdersType
    ): IDefaultStatePostData => {
      switch (action.type) {
        case DELETE_SALE_ORDER:
          return (state = {
            isSuccesfull: true,
            isLoading:false
          });
        case FAILED_TO_DELETE_SALE_ORDER:
          return (state = {
            isSuccesfull: false,
            isLoading:false
          });
        default:
          return {...state,isLoading:true};
      }
    };
    
    export default deleteSaleOrderReducer;
    