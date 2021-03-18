import { Dispatch } from "redux";
import {
  GET_ONE_CLIENT,
  FAIL_TO_GET_ONE_CLIENT,
  GetOneClientType,
  GET_EXIST_CLIENT,
  CLOSE_CLIENT_DETAILS
} from "./types/ClientActionType";
import agent from "../../../../api/agnet";
import IClient from "../../../../models/clients";
export const GetOneClient = (
  id: string,
  close: boolean,
  list: IClient[] | null
) => async (dispatch: Dispatch< GetOneClientType>) => {
  if (close) {
    dispatch({
      type: CLOSE_CLIENT_DETAILS,
    });
  } else {
    try {
      if (list) {

        const res = list.find((result) => result.id === id);
        if (res)
          dispatch({
            type: GET_EXIST_CLIENT,
            payload: res,
          });
      } else {
        const res = await agent.client.details(id).then((result: IClient) => {
          return result;
        });
        dispatch({
          type: GET_ONE_CLIENT,
          payload: res,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAIL_TO_GET_ONE_CLIENT,
      });
    }
  }
};
