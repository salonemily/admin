import { Dispatch } from "@reduxjs/toolkit";
import { FAILED_TO_GET_USER, GetUserType, GET_USER_SUCCESS } from "./types/userActionTypes";
import agent from '../../../../api/agnet'


export const GetUser = () => async (dispatch : Dispatch<GetUserType>) => {
    try {
        const res = await agent.user.current();
        dispatch({
            type: GET_USER_SUCCESS,
            payload: res
        })
        
    } catch (error) {
        console.log(error);
        dispatch({
            type: FAILED_TO_GET_USER
        })
    }
    
}




