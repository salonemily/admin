import { Dispatch } from "@reduxjs/toolkit"
import agent from '../../../../api/agnet'
import IOrderDress from "../../../../models/orderDress"
import { CreateOrderDressType, CREATE_ORDER_DRESS, FAIL_TO_CREATE_ORDER_DRESS } from "./types/OrderDressActionType"
export const PostOrderDress = (createData: IOrderDress) => async (dispatch : Dispatch<CreateOrderDressType>) =>  {
   
    try {
        await agent.orderDresses.create(createData)
        dispatch({
            type: CREATE_ORDER_DRESS,
        })
        
        
    } catch (error) {
        console.log(error);
        dispatch({
            type: FAIL_TO_CREATE_ORDER_DRESS
        })
    }
    
}
