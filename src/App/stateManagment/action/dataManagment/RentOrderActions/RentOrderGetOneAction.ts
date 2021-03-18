import { Dispatch } from "redux";
import {
 GET_ONE_RENT_ORDER,
 FAILD_TO_GET_ONE_RENT_ORDER,
 GET_EXIST_RENT_ORDER_DATA,
 GetOneRentOrdersType,
 CLOSE_ONE_RENT_ORDER
} from "./types/OrderActionType";
import agent from "../../../../api/agnet";
import IOrder from "../../../../models/rentOrders";
export const GetOneRentOrder = (
  id: string,
  list: IOrder[] | null,
  close: boolean
) => async (dispatch: Dispatch<GetOneRentOrdersType>) => {
  if (close) {
    dispatch({
      type: CLOSE_ONE_RENT_ORDER,
      payload: null,
    });
  } else {
  try {
    if (list) {
      const res = list.find((result) => result.id === id);
      if (res)
        dispatch({
          type:  GET_EXIST_RENT_ORDER_DATA,
          payload: res,
        });
    } else {
      const res = await agent.rentOrder.details(id)
      dispatch({
        type:  GET_ONE_RENT_ORDER,
        payload: res,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type:  FAILD_TO_GET_ONE_RENT_ORDER,
    });
  }
}
};
