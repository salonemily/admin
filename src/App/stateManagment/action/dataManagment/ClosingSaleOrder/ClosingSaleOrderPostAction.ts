import { Dispatch } from "@reduxjs/toolkit"
import { history } from "../../../../.."
import agent from '../../../../api/agnet'
import  { IPostClient } from "../../../../models/clients"
import { IClosingSalePost } from "../../../../models/closingSaleOrder"
import  { IPostSalonDress } from "../../../../models/salonDress"
import { CreateFormTypeEnum } from "../../../../utilities/Additional"
import { CreateClosingSaleOrderType, CREATE_CLOSING_SALE_ORDER, FAILED_TO_CREATE_CLOSING_SALE_ORDER } from "./types/ClosingSaleOrderActionType"
export const PostClosingSaleOrder = ( newOrder: IClosingSalePost,
    newClient: IPostClient,
    newDress: IPostSalonDress,
    clientType: CreateFormTypeEnum,
    dressType: CreateFormTypeEnum) => async (dispatch : Dispatch<CreateClosingSaleOrderType>) =>  {
   
    try {
        if(clientType === CreateFormTypeEnum.Edit)await agent.client.update(newClient)
        if(dressType === CreateFormTypeEnum.Edit)await agent.dress.update(newDress)
      if("id" in newClient)
        delete newClient["id"]
        const sendObject = {...newOrder, ...newClient} 
        await agent.closingSaleOrder.create(sendObject)
        dispatch({
            type: CREATE_CLOSING_SALE_ORDER,
        })
        
        history.push(`/zamówienia/wyprzedaż/${newOrder.id}`)
    } catch (error) {
        console.log(error);
        dispatch({
            type: FAILED_TO_CREATE_CLOSING_SALE_ORDER
        })
    }
    
}
