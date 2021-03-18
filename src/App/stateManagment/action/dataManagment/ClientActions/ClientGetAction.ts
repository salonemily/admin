import { Dispatch } from "redux";
import {
  GET_CLIENT_DATA,
  FAIL_TO_GET_CLIENT_DATA,
  GetClientsType,
} from "./types/ClientActionType";
import agent from "../../../../api/agnet";
import IClient from "../../../../models/clients";
export const GetClient = async (dispatch: Dispatch<GetClientsType>) => {
  try {
    const res = await agent.client.list().then((result: IClient[]) => {
       result.sort((result1, result2) => {
        if (result1.surname < result2.surname) return -1;
        if (result1.surname > result2.surname) return 1;
        return 0;
      });
      return result
    });
    dispatch({
      type:  GET_CLIENT_DATA,
      payload: res,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type:   FAIL_TO_GET_CLIENT_DATA,
      payload : null
    });
  }
};
