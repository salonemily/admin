import { Dispatch } from "redux";
import agent from "../../../../api/agnet";
import { FAILED_TO_GET_ONE_CLOSING_SALE_ORDER, GetOneClosingSaleOrdersType, GET_EXIST_CLOSING_SALE_ORDER_DATA, GET_ONE_CLOSING_SALE_ORDER,CLOSE_CLOSING_SALES_DETAILS } from "./types/ClosingSaleOrderActionType";
import IClosingSaleOrder from "../../../../models/closingSaleOrder";
export const GetOneClosingSaleOrder = (
  id: string,
  list: IClosingSaleOrder[] | null,
  close: boolean
) => async (dispatch: Dispatch<GetOneClosingSaleOrdersType>) => {
  if (close) {
    dispatch({
      type: CLOSE_CLOSING_SALES_DETAILS,
      payload: null,
    });
  } else {
  try {
    if (list) {
      const res = list.find((result) => result.id === id);
      if (res)
        dispatch({
          type:  GET_EXIST_CLOSING_SALE_ORDER_DATA,
          payload: res,
        });
    } else {
      const res = await agent.closingSaleOrder.details(id)
      dispatch({
        type:  GET_ONE_CLOSING_SALE_ORDER,
        payload: res,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type:  FAILED_TO_GET_ONE_CLOSING_SALE_ORDER,
    });
  }
}
};
