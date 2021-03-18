import { Dispatch } from "@reduxjs/toolkit";
import { ISaleOrderPost } from "../../../../models/saleOrders";
import agent from "../../../../api/agnet"
import { EditSaleOrderType, EDIT_SALE_ORDER, FAILED_TO_EDIT_SALE_ORDER } from "./types/SaleOrderActionType";
export const EditSaleOrder = (
  order: ISaleOrderPost
) => async (dispatch: Dispatch<EditSaleOrderType>) => {
  try {
    await agent.saleOrder.update(order);
    dispatch({
        type: EDIT_SALE_ORDER,
    })
} catch (error) {
    console.log(error);
    dispatch({
        type: FAILED_TO_EDIT_SALE_ORDER
    })
}
};

