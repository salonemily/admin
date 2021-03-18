import { Dispatch } from "@reduxjs/toolkit";
import agent from "../../../../api/agnet"
import { EDIT_CLOSING_SALE_ORDER, UpdateClosingSaleOrderType,FAILED_TO_EDIT_CLOSING_SALE_ORDER } from "./types/ClosingSaleOrderActionType";
import { IClosingSalePost } from "../../../../models/closingSaleOrder";
export const EditClosingSaleOrder = (
  order: IClosingSalePost
) => async (dispatch: Dispatch<UpdateClosingSaleOrderType>) => {
  try {
    await agent.closingSaleOrder.update(order);
    dispatch({
        type: EDIT_CLOSING_SALE_ORDER,
    })
} catch (error) {
    console.log(error);
    dispatch({
        type: FAILED_TO_EDIT_CLOSING_SALE_ORDER
    })
}
};

