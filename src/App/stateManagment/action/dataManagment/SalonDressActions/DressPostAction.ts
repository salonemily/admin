import { Dispatch } from "@reduxjs/toolkit"
import agent from '../../../../api/agnet'
import { IPostSalonDress } from "../../../../models/salonDress"
import {CREATE_DATA, FAIL_TO_CREATE_DATA,CreateDataType} from './types/DressActionType'
export const DressPostAction = (createData: IPostSalonDress) => async (dispatch : Dispatch<CreateDataType>) =>  {
   
    try {
        await agent.dress.create(createData)
        dispatch({
            type: CREATE_DATA,
        })
        
        
    } catch (error) {
        console.log(error);
        dispatch({
            type: FAIL_TO_CREATE_DATA
        })
    }
    
}
