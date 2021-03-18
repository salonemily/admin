import { Dispatch } from "@reduxjs/toolkit";
import { history } from "../../../../..";
import agent from "../../../../api/agnet";
import { CreateFormTypeEnum } from "../../../../utilities/Additional";
import  { IPostClient } from "../../../../models/clients";
import  { IPostOrderDress } from "../../../../models/orderDress";
import { ISaleOrderPost } from "../../../../models/saleOrders";
import {
  CreateSaleOrderType,
  CREATE_SALE_ORDER,
  FAILED_TO_CREATE_SALE_ORDER,
} from "./types/SaleOrderActionType";
export const PostSaleOrder = (
  newOrder: ISaleOrderPost,
  newClient: IPostClient,
  newDress: IPostOrderDress,
  clientType: CreateFormTypeEnum
) => async (dispatch: Dispatch<CreateSaleOrderType>) => {
  try {
     
    if (clientType === CreateFormTypeEnum.New)
      await agent.client
      .create(newClient)
      .then(await agent.orderDresses.create(newDress))
      .then(await agent.saleOrder.create(newOrder))
      .then(()=> history.push(`/zamówienia/sprzedaż/${newOrder.id}`));
    else if (clientType === CreateFormTypeEnum.Exist)
      await agent.orderDresses
        .create(newDress)
        .then(await agent.saleOrder.create(newOrder))
        .then(()=> history.push(`/zamówienia/sprzedaż/${newOrder.id}`));
      
    else if (clientType === CreateFormTypeEnum.Edit)
      await agent.client.update(newClient)
        .then(await agent.orderDresses.create(newDress))
        .then(await agent.saleOrder.create(newOrder))
        .then(()=> history.push(`/zamówienia/sprzedaż/${newOrder.id}`));
    

    dispatch({
      type: CREATE_SALE_ORDER,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FAILED_TO_CREATE_SALE_ORDER,
    });
  }
};
