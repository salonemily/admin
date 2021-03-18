import {
    EDIT_DATA,
    FAIL_TO_EDIT_DATA,
    EditDataType,
  } from "../../action/dataManagment/SalonDressActions/types/DressActionType";
  import { IDefaultStatePostData } from "./types/reducersType";
  
  const defaultState: IDefaultStatePostData = {
    isSuccesfull: false,
    isLoading : true
  };
  
  const updateDressReducers = (
    state: IDefaultStatePostData = defaultState,
    action : EditDataType
  ): IDefaultStatePostData => {
    switch (action.type) {
      case   EDIT_DATA:
        return (state = {
          isSuccesfull: true,
          isLoading : false
        });
      case FAIL_TO_EDIT_DATA:
        return (state = {
          isSuccesfull: false,
          isLoading : false
        });
      default:
        return defaultState;
    }
  };
  
  export default updateDressReducers;