import { Dispatch } from "@reduxjs/toolkit";
import agent from "../../../../api/agnet";
import { DeleteOrderDressType, DELETE_ORDER_DRESS, FAIL_TO_DELETE_ORDER_DRESS } from "./types/OrderDressActionType";
export const DeleteOrderDress = (id: string) => async (
  dispatch: Dispatch<DeleteOrderDressType>
) => {
  try {
    console.log(id)
    await agent.orderDresses.delete(id)
    dispatch({
      type: DELETE_ORDER_DRESS,
    });
    
  } catch (error) {
    console.log(error);
    dispatch({
      type: FAIL_TO_DELETE_ORDER_DRESS,
    });
  }
};
