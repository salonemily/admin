import { Dispatch } from '@reduxjs/toolkit'
import { ILoggin } from '../../../../models/user'
import { GetLoginType, LOGGIN_FAILED, LOGGIN_SUCCESS } from './types/userActionTypes'
import agent from "../../../../api/agnet";
import { history } from '../../../../..';
export const Login = (userData:ILoggin) => async (dispatch : Dispatch<GetLoginType>) => {
    try {
        const res = await agent.user.login(userData)
        dispatch({
            type: LOGGIN_SUCCESS,
            payload: res
        })
        history.push('/suknie-salonowe')
        
    } catch (error) {
        console.log(error);
        dispatch({
            type: LOGGIN_FAILED
        })
    }
    
}




