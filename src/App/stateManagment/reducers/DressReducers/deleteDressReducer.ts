import { DeleteDressType, DELETE_DATA, FAIL_TO_DELETE_DATA } from "../../action/dataManagment/SalonDressActions/types/DressActionType";
  import { IDefaultStatePostData } from "./types/reducersType";
  
  const defaultState: IDefaultStatePostData = {
    isSuccesfull: false,
    isLoading : true
  };
  
  const deleteDressReducer = (
    state: IDefaultStatePostData = defaultState,
    action : DeleteDressType
  ): IDefaultStatePostData => {
    switch (action.type) {
      case DELETE_DATA:
        return (state = {
          isSuccesfull: true,
          isLoading : false
        });
      case FAIL_TO_DELETE_DATA:
        return (state = {
          isSuccesfull: false,
          isLoading : false
        });
      default:
        return state;
    }
  };
  
  export default deleteDressReducer;
  