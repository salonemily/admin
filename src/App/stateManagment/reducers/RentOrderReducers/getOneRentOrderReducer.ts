import {
    GetOneRentOrdersType,
    GET_ONE_RENT_ORDER,
    FAILD_TO_GET_ONE_RENT_ORDER,
    GET_EXIST_RENT_ORDER_DATA
  } from "../../action/dataManagment/RentOrderActions/types/OrderActionType";
  import {IDefaultStateOnaData } from './types/orderReducersType'
  const defaultState: IDefaultStateOnaData = {
    isLoading: true,
    data: null,
    isSuccesfull:false
  };
  const getOneRentOrderReducer = (
    state: IDefaultStateOnaData = defaultState,
    action: GetOneRentOrdersType
  ): IDefaultStateOnaData => {
    switch (action.type) {
      case GET_ONE_RENT_ORDER:
        return (state = {
          data: action.payload,
          isLoading: false,
        isSuccesfull:true
        });
        case   GET_EXIST_RENT_ORDER_DATA:
          return (state = {
            data: action.payload,
            isLoading: false,
        isSuccesfull:true
          });
          case FAILD_TO_GET_ONE_RENT_ORDER:
              return {...state,isSuccesfull:false}
      default:
        return {...state,isLoading:true};
    }
  };
  
  export default getOneRentOrderReducer;
  