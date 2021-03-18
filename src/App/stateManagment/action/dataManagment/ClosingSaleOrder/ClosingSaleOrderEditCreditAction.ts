import { Dispatch } from "@reduxjs/toolkit";
import agent from "../../../../api/agnet"
import swal from "sweetalert";
import {  EDIT_CLOSING_SALE_ORDER_PRICE, FAILED_TO_EDIT_CLOSING_SALE_ORDER_PRICE, UpdateCreditClosingSaleOrderType  } from "./types/ClosingSaleOrderActionType";
export const EditClosingSaleOrderCredit = (
  id:string,
  price:any,

) => async (dispatch: Dispatch<UpdateCreditClosingSaleOrderType>) => {
  try {
    await agent.closingSaleOrder.editCredit(id,price);
    dispatch({
        type: EDIT_CLOSING_SALE_ORDER_PRICE,
    })
    swal({
      title: "Kwota",
      text: "została zaktualizowana",
      icon: "success",
    });
} catch (error) {
    console.log(error);
    dispatch({
        type: FAILED_TO_EDIT_CLOSING_SALE_ORDER_PRICE
    })
    swal({
      title: "Błąd",
      text:
        "Coś poszło nie tak sprawdź połączenie internetowe albo zadzwoń pod numer 696022332",
      icon: "error",
    });
}
};

