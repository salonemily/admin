import {
  CREATE_DATA,
  FAIL_TO_CREATE_DATA,
  CreateDataType,
} from "../../action/dataManagment/SalonDressActions/types/DressActionType";
import { IDefaultStatePostData } from "./types/reducersType";

const defaultState: IDefaultStatePostData = {
  isSuccesfull: false,
  isLoading : true,
};

const postDressReducers = (
  state: IDefaultStatePostData = defaultState,
  action : CreateDataType
): IDefaultStatePostData => {
  switch (action.type) {
    case CREATE_DATA:
      return (state = {
        isSuccesfull: true,
        isLoading : false
      });
    case FAIL_TO_CREATE_DATA:
      return (state = {
        isSuccesfull: false,
        isLoading : false
      });
    default:
      return defaultState;
  }
};

export default postDressReducers;
