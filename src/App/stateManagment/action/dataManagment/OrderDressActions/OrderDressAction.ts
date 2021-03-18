import { Dispatch } from "redux";
import agent from "../../../../api/agnet";
import IOrderDress from "../../../../models/orderDress";
import { FAIL_TO_GET_ORDER_DRESSES, GetOrderDressType, GET_ORDER_DRESSES } from "./types/OrderDressActionType";
export const GetOrderDress = async (dispatch: Dispatch<GetOrderDressType>) => {
  try {
    const res = await agent.orderDresses.list().then((result: IOrderDress[]) => {
      return result;
    });
    dispatch({
      type: GET_ORDER_DRESSES,
      payload: res,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FAIL_TO_GET_ORDER_DRESSES,
      payload : null
    });
  }
};
