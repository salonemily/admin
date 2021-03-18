import { Dispatch } from "@reduxjs/toolkit"
import agent from '../../../../api/agnet'
import  { IPostSalonDress } from "../../../../models/salonDress"
import {EDIT_DATA, FAIL_TO_EDIT_DATA,EditDataType} from './types/DressActionType'
export const DressEditAction = (editData : IPostSalonDress) => async (dispatch : Dispatch<EditDataType>) =>  {
   
    try {
        await agent.dress.update(editData)
        dispatch({
            type: EDIT_DATA,
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: FAIL_TO_EDIT_DATA
        })
    }
    
}
