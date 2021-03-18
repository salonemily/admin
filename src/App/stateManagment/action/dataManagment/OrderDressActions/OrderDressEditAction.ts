import { Dispatch } from "@reduxjs/toolkit"
import agent from '../../../../api/agnet'
import IOrderDress from "../../../../models/orderDress"
import { EditOrderDressType, EDIT_ORDER_DRESS, FAIL_TO_EDIT_ORDER_DRESS } from "./types/OrderDressActionType"
export const EditOrderDress = (editData : IOrderDress) => async (dispatch : Dispatch<EditOrderDressType>) =>  {
   
    try {
        await agent.orderDresses.update(editData)
        dispatch({
            type: EDIT_ORDER_DRESS,
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: FAIL_TO_EDIT_ORDER_DRESS
        })
    }
    
}
