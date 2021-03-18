import { Dispatch } from "@reduxjs/toolkit";
import { history } from "../../../../..";
import agent from "../../../../api/agnet";
import  { IPostClient } from "../../../../models/clients";
import { IRentOrderPost } from "../../../../models/rentOrders";
import  { IPostSalonDress } from "../../../../models/salonDress";
import { CreateFormTypeEnum } from "../../../../utilities/Additional";
import {
  CreateRentOrderType,
  CREATE_RENT_ORDER,
  FAIL_TO_CREATE_RENT_ORDER,
} from "./types/OrderActionType";
export const PostRentOrder = (
  newOrder: IRentOrderPost,
  newClient: IPostClient,
  newDress: IPostSalonDress,
  clientType: CreateFormTypeEnum,
  dressType: CreateFormTypeEnum
) => async (dispatch: Dispatch<CreateRentOrderType>) => {
  try {
    if(clientType === CreateFormTypeEnum.Edit)await agent.client.update(newClient)
    if(dressType === CreateFormTypeEnum.Edit)await agent.dress.update(newDress)
    const client = {...newClient,clientName:newClient.name}
    if("name" in client)
      delete client["name"]
    if("id" in client)
      delete client["id"]
    if("id" in newDress)
      delete newDress["id"]
    const sendObject = {...newOrder, ...newDress, ...client} 
    await agent.rentOrder.create(sendObject).then(()=>{
      history.push(`/zamówienia/wypożyczenie/${newOrder.id}`)
    })


    dispatch({
      type: CREATE_RENT_ORDER,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FAIL_TO_CREATE_RENT_ORDER,
    });
  }
};
