import { DeleteRentOrdersType, DELETE_RENT_ORDER, FAILED_TO_DELETE_RENT_ORDER } from "../../action/dataManagment/RentOrderActions/types/OrderActionType";
import { IDefaultStatePostData } from "./types/orderReducersType";

    
    const defaultState: IDefaultStatePostData = {
      isSuccesfull: false,
      isLoading:true
    };
    
    const deleteRentOrderReducer = (
      state: IDefaultStatePostData = defaultState,
      action : DeleteRentOrdersType
    ): IDefaultStatePostData => {
      switch (action.type) {
        case DELETE_RENT_ORDER:
          return (state = {
            isSuccesfull: true,
            isLoading:false
          });
        case FAILED_TO_DELETE_RENT_ORDER:
          return (state = {
            isSuccesfull: false,
            isLoading:false
          });
        default:
          return {...state,isLoading:true};
      }
    };
    
    export default deleteRentOrderReducer;
    