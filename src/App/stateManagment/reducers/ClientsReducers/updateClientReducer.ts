import {
  EditClientType,
  EDIT_CLIENT,
  FAIL_TO_EDIT_CLIENT,
} from "../../action/dataManagment/ClientActions/types/ClientActionType";
import { IDefaultStatePostData } from "./types/clientReducersType";

const defaultState: IDefaultStatePostData = {
  isSuccesfull: false,
  isLoading: true,
};

const updateClientReducers = (
  state: IDefaultStatePostData = defaultState,
  action: EditClientType
): IDefaultStatePostData => {
  switch (action.type) {
    case EDIT_CLIENT:
      return (state = {
        isSuccesfull: true,
        isLoading: false,
      });
    case FAIL_TO_EDIT_CLIENT:
      return (state = {
        isSuccesfull: false,
        isLoading: false,
      });
    default:
      return defaultState;
  }
};

export default updateClientReducers;
