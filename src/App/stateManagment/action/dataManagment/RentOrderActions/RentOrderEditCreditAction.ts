import { Dispatch } from "@reduxjs/toolkit";
import agent from "../../../../api/agnet"
import {  EDIT_RENT_ORDER_PRICE, FAILED_TO_EDIT_RENT_ORDER_PRICE, UpdateCreditRentOrderType  } from "./types/OrderActionType";
import swal from "sweetalert";
export const EditRentOrderCredit = (
  id:string,
  price:any,

) => async (dispatch: Dispatch<UpdateCreditRentOrderType>) => {
  try {
    await agent.rentOrder.editCredit(id,price);
    dispatch({
        type: EDIT_RENT_ORDER_PRICE,
    })
    swal({
      title: "Kwota",
      text: "została zaktualizowana",
      icon: "success",
    });
} catch (error) {
    console.log(error);
    dispatch({
        type: FAILED_TO_EDIT_RENT_ORDER_PRICE
    })
    swal({
      title: "Błąd",
      text:
        "Coś poszło nie tak sprawdź połączenie internetowe albo zadzwoń pod numer 696022332",
      icon: "error",
    });
}
};

