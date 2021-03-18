
  import { DeleteClientType, DELETE_CLIENT, FAIL_TO_DELETE_CLIENT } from "../../action/dataManagment/ClientActions/types/ClientActionType";
import { IDefaultStatePostData } from "./types/clientReducersType";
  
  const defaultState: IDefaultStatePostData = {
    isSuccesfull: false,
    isLoading:true
  };
  
  const deleteClientReducer = (
    state: IDefaultStatePostData = defaultState,
    action : DeleteClientType
  ): IDefaultStatePostData => {
    switch (action.type) {
      case DELETE_CLIENT:
        return (state = {
          isSuccesfull: true,
          isLoading:false
        });
      case FAIL_TO_DELETE_CLIENT:
        return (state = {
          isSuccesfull: false,
          isLoading:false
        });
      default:
        return state;
    }
  };
  
  export default deleteClientReducer;
  