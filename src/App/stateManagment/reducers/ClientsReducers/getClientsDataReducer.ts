import {
  GET_CLIENT_DATA,
  FAIL_TO_GET_CLIENT_DATA,
  GetClientsType,
} from "../../action/dataManagment/ClientActions/types/ClientActionType";
import { IDefaultState } from "./types/clientReducersType";

const defaultState: IDefaultState = {
  isSuccesfull: false,
  isLoading: true,
  data: null,
};
const getDressData = (
  state: IDefaultState = defaultState,
  action: GetClientsType
): IDefaultState => {
  switch (action.type) {
    case GET_CLIENT_DATA:
      return (state = {
        data: action.payload,
        isSuccesfull: true,
        isLoading: false,
      });
    case FAIL_TO_GET_CLIENT_DATA:
      return (state = {
        isSuccesfull: false,
        isLoading: false,
        data: null,
      });
    default:
      return { ...state, isLoading: true };
  }
};
export default getDressData;
