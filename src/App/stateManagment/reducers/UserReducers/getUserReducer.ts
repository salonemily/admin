import { FAILED_TO_GET_USER, GetUserType, GET_USER_SUCCESS } from "../../action/dataManagment/UserActions/types/userActionTypes";
import { IDefaultGetState } from "./types/loginReducerType";

  
  const defaultState: IDefaultGetState = {
    loading: false,
    userData:null
  };
  const getUserReducer = (
    state: IDefaultGetState = defaultState,
    action: GetUserType
  ): IDefaultGetState => {
    switch (action.type) {
      case GET_USER_SUCCESS:
        return (state = {
          userData: action.payload,
          loading: true,
        });
      case FAILED_TO_GET_USER:
        return (state = {
          loading: false,
          userData: null
        });
      default:
        return state;
    }
  };
  export default getUserReducer;