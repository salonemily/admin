import { Dispatch } from "@reduxjs/toolkit"
import agent from '../../../../api/agnet'
import  { IPostClient } from "../../../../models/clients"
import { EditClientType, EDIT_CLIENT, FAIL_TO_EDIT_CLIENT } from "./types/ClientActionType"
export const EditClient = (editData : IPostClient) => async (dispatch : Dispatch<EditClientType>) =>  {
   
    try {
        await agent.client.update(editData)
        dispatch({
            type: EDIT_CLIENT,
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: FAIL_TO_EDIT_CLIENT
        })
    }
    
}
