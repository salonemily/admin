import { Dispatch } from "@reduxjs/toolkit";
import agent from "../../../../api/agnet"
import { EDIT_RENT_ORDER, UpdateRentOrderType,FAILED_TO_EDIT_RENT_ORDER } from "./types/OrderActionType";
import { IRentOrderPost } from "../../../../models/rentOrders";
import swal from "sweetalert";
import { history } from "../../../../..";
export const EditRentOrder = (
  order: IRentOrderPost
) => async (dispatch: Dispatch<UpdateRentOrderType>) => {
  try {
    await agent.rentOrder.update(order);
    dispatch({
        type: EDIT_RENT_ORDER,
    })
    swal({
      title: "Edycja szczegółów zamówienia",
      text: "przebiegła pomyślnie",
      icon: "success",
    });
    history.goBack();
} catch (error) {
    console.log(error);
    dispatch({
        type: FAILED_TO_EDIT_RENT_ORDER
    })
    swal({
      title: "Błąd",
      text:
        "Coś poszło nie tak sprawdź połączenie internetowe albo zadzwoń pod numer 696022332",
      icon: "error",
    });
    history.goBack();
}
};

