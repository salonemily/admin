import {
  CreateClientType,
  CREATE_CLIENT,
  FAIL_TO_CREATE_CLIENT,
} from "../../action/dataManagment/ClientActions/types/ClientActionType";
import { IDefaultStatePostData } from "./types/clientReducersType";

const defaultState: IDefaultStatePostData = {
  isSuccesfull: false,
  isLoading: true,
};

const postDressReducers = (
  state: IDefaultStatePostData = defaultState,
  action: CreateClientType
): IDefaultStatePostData => {
  switch (action.type) {
    case CREATE_CLIENT:
      return (state = {
        isSuccesfull: true,
        isLoading: false,
      });
    case FAIL_TO_CREATE_CLIENT:
      return (state = {
        isSuccesfull: false,
        isLoading: false,
      });
    default:
      return defaultState;
  }
};

export default postDressReducers;
