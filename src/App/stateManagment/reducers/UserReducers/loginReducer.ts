import {
  GetLoginType,
  LOGGIN_FAILED,
  LOGGIN_SUCCESS,
} from "../../action/dataManagment/UserActions/types/userActionTypes";
import { IDefaultState } from "./types/loginReducerType";
const defaultState: IDefaultState = {
  isLoggin: false,
  logginError:false,
  userData: null,
};
const loginReducer = (
  state: IDefaultState = defaultState,
  action: GetLoginType
): IDefaultState => {
  switch (action.type) {
    case LOGGIN_SUCCESS:
      localStorage.setItem("jwt", action.payload.token);
      return (state = {
        isLoggin: true,
        userData: action.payload,
        logginError:false
      });
    case LOGGIN_FAILED:
      return (state = {
        isLoggin: false,
        userData: null,
        logginError:true
      });
    default:
      return state;
  }
};

export default loginReducer;
