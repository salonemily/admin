import { Dispatch } from "redux";
import {
  GET_ONE_DATA,
  FAIL_TO_GET_ONE_DATA,
  GetOneDressType,
  CLOSE_DETAILS,
  GET_EXIST_DRESS_DATA,
} from "./types/DressActionType";
import agent from "../../../../api/agnet";
import IDress from "../../../../models/salonDress";
export const DressGetOneAction = (
  id: string,
  close: boolean,
  list: IDress[] | null
) => async (dispatch: Dispatch<GetOneDressType>) => {
  if (close) {
    dispatch({
      type: CLOSE_DETAILS,
    });
  } else {
    try {
      if (list) {
        const res = list.find((result) => result.id === id);
        if (res)
          dispatch({
            type: GET_EXIST_DRESS_DATA,
            payload: res,
          });
      } else {
        const res = await agent.dress.details(id)
        dispatch({
          type: GET_ONE_DATA,
          payload: res,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAIL_TO_GET_ONE_DATA,
        payload: null,
      });
    }
  }
};
