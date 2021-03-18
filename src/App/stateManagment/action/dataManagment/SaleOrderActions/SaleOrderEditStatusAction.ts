import { Dispatch } from "@reduxjs/toolkit";
import agent from "../../../../api/agnet"
import { EditSaleOrderStatusType, EDIT_SALE_ORDER_STATUS, FAILED_TO_EDIT_SALE_ORDER_STATUS } from "./types/SaleOrderActionType";
import swal from "sweetalert";
export const EditSaleOrderStatus = (
  id:string,
  status:any

) => async (dispatch: Dispatch<EditSaleOrderStatusType>) => {
  console.log("elo")
  try {
    await agent.saleOrder.editStatus(id,status);
    dispatch({
        type: EDIT_SALE_ORDER_STATUS,
    })
    swal({
      title: "Edycja Statusu zamówienia",
      text: "przebiegła pomyślnie",
      icon: "success",
    });
} catch (error) {
    console.log(error);
    dispatch({
        type: FAILED_TO_EDIT_SALE_ORDER_STATUS
    })
    swal({
      title: "Błąd",
      text:
        "Coś poszło nie tak sprawdź połączenie internetowe albo zadzwoń pod numer 696022332",
      icon: "error",
    });
}
};

