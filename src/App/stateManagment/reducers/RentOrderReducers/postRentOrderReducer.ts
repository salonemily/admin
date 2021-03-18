
import { CreateRentOrderType, CREATE_RENT_ORDER, FAIL_TO_CREATE_RENT_ORDER } from "../../action/dataManagment/RentOrderActions/types/OrderActionType";
import { IDefaultStatePostData } from "./types/orderReducersType";
  
  const defaultState: IDefaultStatePostData = {
    isLoading: true,
    isSuccesfull:false
  };
  
  const postRentOrderReducer = (
    state: IDefaultStatePostData = defaultState,
    action : CreateRentOrderType
  ): IDefaultStatePostData => {
    switch (action.type) {
      case CREATE_RENT_ORDER:
        return (state = {
          isSuccesfull: true,
          isLoading:false
        });
      case FAIL_TO_CREATE_RENT_ORDER:
        return (state = {
          isSuccesfull: false,
          isLoading:false
        });
      default:
       return { ...state, isLoading: true };;
    }
  };
  
  export default postRentOrderReducer;
  