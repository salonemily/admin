
import { Dispatch } from "redux";
import agent from "../../../../api/agnet";
import IClosingSaleOrder from "../../../../models/closingSaleOrder";
import { FAILED_TO_GET_CLOSING_SALE_ORDER_DATA, GetClosingSaleOrdersType, GET_CLOSING_SALE_ORDER_DATA } from "./types/ClosingSaleOrderActionType";
export const GetClosingSalesOrders = async (dispatch: Dispatch<GetClosingSaleOrdersType>) => {
  try {
    const res = await agent.closingSaleOrder.list().then((result: IClosingSaleOrder[]) => {
      result.sort((result1, result2) => {
        if (result1.weddingDate < result2.weddingDate) return -1;
        if (result1.weddingDate > result2.weddingDate) return 1;
        return 0;
      });
      return result;
    });
    
    dispatch({
      type: GET_CLOSING_SALE_ORDER_DATA,
      payload: res,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type:   FAILED_TO_GET_CLOSING_SALE_ORDER_DATA,
      payload : null
    });
  }
};
