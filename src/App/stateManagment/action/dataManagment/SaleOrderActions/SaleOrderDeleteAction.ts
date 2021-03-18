import { Dispatch } from "@reduxjs/toolkit";
import agent from "../../../../api/agnet";

import { DeleteSaleOrdersType, DELETE_SALE_ORDER, FAILED_TO_DELETE_SALE_ORDER } from "./types/SaleOrderActionType";

export const DeleteSaleOrder = (id: string) => async (
  dispatch: Dispatch<DeleteSaleOrdersType>
) => {
  try {
    await agent.saleOrder.delete(id);
    dispatch({
      type:  DELETE_SALE_ORDER,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type:  FAILED_TO_DELETE_SALE_ORDER,
    });
  }
};

