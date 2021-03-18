import {
  GetOneDressType,
  GET_ONE_DATA,
  FAIL_TO_GET_ONE_DATA,
  CLOSE_DETAILS,
  GET_EXIST_DRESS_DATA
} from "../../action/dataManagment/SalonDressActions/types/DressActionType";
import { IDefaultStateOnaData } from "./types/reducersType";

const defaultState: IDefaultStateOnaData = {
  isLoading: true,
  data: null,
  isSuccesfull:false
};

const getOneDressReducer = (
  state: IDefaultStateOnaData = defaultState,
  action: GetOneDressType
): IDefaultStateOnaData => {
  switch (action.type) {
    case GET_ONE_DATA:
      return (state = {
        data: action.payload,
        isLoading: false,
        isSuccesfull:true
      });
      case GET_EXIST_DRESS_DATA:
        return (state = {
          data: action.payload,
          isLoading: false,
        isSuccesfull:true
        });
      case CLOSE_DETAILS:
      return (state = {
        data: null,
        isLoading: false,
        isSuccesfull:true})
    case FAIL_TO_GET_ONE_DATA:
      return (state = {
        data: null,
        isLoading: false,
        isSuccesfull:false
      });
    default:
      return state;
  }
};

export default getOneDressReducer;
