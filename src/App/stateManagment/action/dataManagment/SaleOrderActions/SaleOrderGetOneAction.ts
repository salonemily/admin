import { Dispatch } from "redux";
import agent from "../../../../api/agnet";
import {
  CLOSE_ONE_SALE_ORDER,
  FAILED_TO_GET_ONE_SALE_ORDER,
  GetOneSaleOrdersType,
  GET_EXIST_SALE_ORDER_DATA,
  GET_ONE_SALE_ORDER,
} from "./types/SaleOrderActionType";
import ISaleOrder from "../../../../models/saleOrders";
export const GetOneSaleOrder = (
  id: string,
  list: ISaleOrder[] | null,
  close: boolean
) => async (dispatch: Dispatch<GetOneSaleOrdersType>) => {
  if (close) {
    dispatch({
      type: CLOSE_ONE_SALE_ORDER,
      payload: null,
    });
  } else {
    try {
      if (list) {
        const res = list.find((result) => result.id === id);
        if (res)
          dispatch({
            type: GET_EXIST_SALE_ORDER_DATA,
            payload: res,
          });
      } else {
        const res = await agent.saleOrder.details(id)
        dispatch({
          type: GET_ONE_SALE_ORDER,
          payload: res,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAILED_TO_GET_ONE_SALE_ORDER,
      });
    }
  }
};
