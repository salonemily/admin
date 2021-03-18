import { Dispatch } from "@reduxjs/toolkit";
import agent from "../../../../api/agnet"
import swal from "sweetalert";
import {  EDIT_CLOSING_SALE_ORDER_STATUS, FAILED_TO_EDIT_CLOSING_SALE_ORDER_STATUS, UpdateStatusClosingSaleOrderType } from "./types/ClosingSaleOrderActionType";
export const EditClosingSaleOrderStatus = (
  id:string,
  status:any

) => async (dispatch: Dispatch<UpdateStatusClosingSaleOrderType>) => {
  try {
    await agent.closingSaleOrder.editStatus(id,status);
    dispatch({
        type: EDIT_CLOSING_SALE_ORDER_STATUS,
    })
    swal({
      title: "Edycja Statusu zamówienia",
      text: "przebiegła pomyślnie",
      icon: "success",
    });
} catch (error) {
    console.log(error);
    dispatch({
        type: FAILED_TO_EDIT_CLOSING_SALE_ORDER_STATUS
    })
    swal({
      title: "Błąd",
      text:
        "Coś poszło nie tak sprawdź połączenie internetowe albo zadzwoń pod numer 696022332",
      icon: "error",
    });
}
};

