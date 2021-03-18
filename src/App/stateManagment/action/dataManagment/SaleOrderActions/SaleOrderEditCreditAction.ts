import { Dispatch } from "@reduxjs/toolkit";
import agent from "../../../../api/agnet"
import swal from "sweetalert";
import {  EDIT_SALE_ORDER_PRICE, FAILED_TO_EDIT_SALE_ORDER_PRICE, UpdateCreditSaleOrderType  } from "./types/SaleOrderActionType";
export const EditSaleOrderCredit = (
  id:string,
  price:any,
) => async (dispatch: Dispatch<UpdateCreditSaleOrderType>) => {
  try {
    await agent.saleOrder.editCredit(id,price);
    dispatch({
        type: EDIT_SALE_ORDER_PRICE,
   
    })
    swal({
      title: "Kwota",
      text: "została zaktualizowana",
      icon: "success",
    });
} catch (error) {
    console.log(error);
    dispatch({
        type: FAILED_TO_EDIT_SALE_ORDER_PRICE
    })
    swal({
      title: "Błąd",
      text:
        "Coś poszło nie tak sprawdź połączenie internetowe albo zadzwoń pod numer 696022332",
      icon: "error",
    });
}
};

