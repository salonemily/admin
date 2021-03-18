import { Dispatch } from "redux";
import agent from "../../../../api/agnet";
import IOrderDress from "../../../../models/orderDress";
import { CLOSE_ORDER_DRESS_DETAILS, FAIL_TO_GET_ONE_ORDER_DRESS, GetOneOrderDressType, GET_EXIST_ORDER_DRESS, GET_ONE_ORDER_DRESS } from "./types/OrderDressActionType";
export const GetOneOrderDress = (
  id: string,
  close: boolean,
  list: IOrderDress[] | null
) => async (dispatch: Dispatch<GetOneOrderDressType>) => {
  if (close) {
    dispatch({
      type: CLOSE_ORDER_DRESS_DETAILS,
    });
  } else {
    try {
      if (list) {
        const res = list.find((result) => result.id === id);
        if (res)
          dispatch({
            type: GET_EXIST_ORDER_DRESS,
            payload: res,
          });
      } else {
        const res = await agent.orderDresses.details(id)
        dispatch({
          type: GET_ONE_ORDER_DRESS,
          payload: res,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAIL_TO_GET_ONE_ORDER_DRESS
      });
    }
  }
};
