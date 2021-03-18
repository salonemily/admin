import { Dispatch } from "@reduxjs/toolkit"
import agent from '../../../../api/agnet'
import  { IPostClient } from "../../../../models/clients"
import { CreateClientType, CREATE_CLIENT, FAIL_TO_CREATE_CLIENT } from "./types/ClientActionType"

export const PostClient = (createData: IPostClient) => async (dispatch : Dispatch<CreateClientType>) =>  {
   
    try {
        await agent.client.create(createData)
        dispatch({
            type: CREATE_CLIENT,
        })
        
        
    } catch (error) {
        console.log(error);
        dispatch({
            type: FAIL_TO_CREATE_CLIENT
        })
    }
    
}
