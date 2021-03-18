
import { EDIT_RENT_ORDER, FAILED_TO_EDIT_RENT_ORDER, UpdateRentOrderType } from "../../action/dataManagment/RentOrderActions/types/OrderActionType";
import { IDefaultStatePostData } from "./types/orderReducersType";

const defaultState: IDefaultStatePostData = {
  isSuccesfull: false,
  isLoading: true,
};

const updateRentOrderReducer = (
  state: IDefaultStatePostData = defaultState,
  action: UpdateRentOrderType
): IDefaultStatePostData => {
  switch (action.type) {
    case EDIT_RENT_ORDER:
      return (state = {
        isSuccesfull: true,
        isLoading:false
      });
    case FAILED_TO_EDIT_RENT_ORDER:
      return (state = {
        isSuccesfull: false,
        isLoading:false
      });
    default:
      return {...state,isLoading:true};
  }
};

export default updateRentOrderReducer;
