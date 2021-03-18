import { Dispatch } from "redux";
import agent from "../../../../api/agnet";
import { format } from "date-fns";
import { FAILED_TO_GET_SALE_ORDER_DATA, GetSaleOrdersType, GET_SALE_ORDER_DATA } from "./types/SaleOrderActionType";
import ISaleOrder from "../../../../models/saleOrders";
export const GetSalesOrders = async (dispatch: Dispatch<GetSaleOrdersType>) => {
  try {
    const res = await agent.saleOrder.list().then((result: ISaleOrder[]) => {
      result.forEach(element => {
        element.weddingDate = format( new Date(element.weddingDate.split('T')[0]),'dd.MM.yyyy');
        element.agreementDate = format( new Date(element.agreementDate.split('T')[0]),'dd.MM.yyyy');
      });
      return result;
    });
    dispatch({
      type: GET_SALE_ORDER_DATA,
      payload: res,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type:   FAILED_TO_GET_SALE_ORDER_DATA,
      payload : null
    });
  }
};
