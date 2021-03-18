import {
  GET_ONE_CLIENT,
  FAIL_TO_GET_ONE_CLIENT,
  GetOneClientType,
  GET_EXIST_CLIENT,
  CLOSE_CLIENT_DETAILS,
} from "../../action/dataManagment/ClientActions/types/ClientActionType";
import { IDefaultStateOnaData } from "./types/clientReducersType";

const defaultState: IDefaultStateOnaData = {
  isLoading: true,
  data: null,
  isSuccesfull:false
};

const getOneClient = (
  state: IDefaultStateOnaData = defaultState,
  action: GetOneClientType
): IDefaultStateOnaData => {
  switch (action.type) {
    case GET_ONE_CLIENT:
      return (state = {
        data: action.payload,
        isLoading: false,
        isSuccesfull:true
        
      });
    case GET_EXIST_CLIENT:
      return (state = {
        data: action.payload,
        isLoading: false,
        isSuccesfull:true
      });
    case CLOSE_CLIENT_DETAILS:
      return (state = {
        data: null,
        isLoading: false,
        isSuccesfull:true
      });
    case  FAIL_TO_GET_ONE_CLIENT:
      return (state = {
        data: null,
        isLoading: false,
        isSuccesfull:false
      });
    default:
      return state;
  }
};

export default getOneClient;
