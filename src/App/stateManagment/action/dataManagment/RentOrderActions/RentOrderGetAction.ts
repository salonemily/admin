import { Dispatch } from "redux";
import {
  GET_RENT_ORDER_DATA,
  FAIL_TO_GET_RENT_ORDER_DATA,
  GetRentOrdersType

} from "./types/OrderActionType";
import agent from "../../../../api/agnet";
import IOrder from "../../../../models/rentOrders";
import { format } from "date-fns";
export const GetRentOrder = async (dispatch: Dispatch<GetRentOrdersType>) => {
  try {
    const res = await agent.rentOrder.list().then((result: IOrder[]) => {
      result.sort((result1, result2) => {
        if (result1.weddingDate < result2.weddingDate) return -1;
        if (result1.weddingDate > result2.weddingDate) return 1;
        return 0;
      });
      result.forEach(element => {
        element.weddingDate = format( new Date(element.weddingDate.split('T')[0]),'dd.MM.yyyy');
      });
      return result;
    });
    dispatch({
      type: GET_RENT_ORDER_DATA,
      payload: res,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type:   FAIL_TO_GET_RENT_ORDER_DATA,
      payload : null
    });
  }
};
