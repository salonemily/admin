import { Dispatch } from "@reduxjs/toolkit";
import agent from "../../../../api/agnet"
import { EDIT_RENT_ORDER_STATUS, FAILED_TO_EDIT_RENT_ORDER_STATUS, UpdateStatusRentOrderType } from "./types/OrderActionType";
import swal from "sweetalert";
export const EditRentOrderStatus = (
  id:string,
  status:any

) => async (dispatch: Dispatch<UpdateStatusRentOrderType>) => {
  try {
    await agent.rentOrder.editStatus(id,status);
    dispatch({
        type: EDIT_RENT_ORDER_STATUS,
    })
    swal({
      title: "Edycja Statusu zamówienia",
      text: "przebiegła pomyślnie",
      icon: "success",
    });
} catch (error) {
    console.log(error);
    dispatch({
        type: FAILED_TO_EDIT_RENT_ORDER_STATUS
    })
    swal({
      title: "Błąd",
      text:
        "Coś poszło nie tak sprawdź połączenie internetowe albo zadzwoń pod numer 696022332",
      icon: "error",
    });
}
};

