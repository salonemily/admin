import { Dispatch } from "@reduxjs/toolkit";
import agent from "../../../../api/agnet";

import { DeleteRentOrdersType, DELETE_RENT_ORDER, FAILED_TO_DELETE_RENT_ORDER } from "./types/OrderActionType";

export const DeleteRentOrder = (id: string) => async (
  dispatch: Dispatch<DeleteRentOrdersType>
) => {
  try {
    await agent.rentOrder.delete(id);
    dispatch({
      type:  DELETE_RENT_ORDER,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type:  FAILED_TO_DELETE_RENT_ORDER,
    });
  }
};

