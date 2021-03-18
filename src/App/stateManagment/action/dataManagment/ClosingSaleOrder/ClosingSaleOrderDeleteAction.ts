import { Dispatch } from "@reduxjs/toolkit";
import agent from "../../../../api/agnet";

import { DeleteClosingSaleOrdersType, DELETE_CLOSING_SALE_ORDER, FAILED_TO_DELETE_CLOSING_SALE_ORDER } from "./types/ClosingSaleOrderActionType";

export const DeleteClosingSale = (id: string) => async (
  dispatch: Dispatch<DeleteClosingSaleOrdersType>
) => {
  try {
    await agent.closingSaleOrder.delete(id);
    dispatch({
      type:  DELETE_CLOSING_SALE_ORDER,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type:  FAILED_TO_DELETE_CLOSING_SALE_ORDER,
    });
  }
};

