import { Dispatch } from "redux";
import {
  GET_DATA,
  FAIL_TO_GETDATA,
  GetDressType,
} from "./types/DressActionType";
import agent from "../../../../api/agnet";
import IDress from "../../../../models/salonDress";
export const GetDress=(isFree?:boolean,isRent?:boolean,isRentInProgress?:boolean,isOrder?:boolean,isSold?:boolean) => async (dispatch: Dispatch<GetDressType>) => {
  try {
    const res = await agent.dress.list(isFree,isRent,isRentInProgress,isOrder,isSold).then((result: IDress[]) => {
      result.sort( (a,b) => {
        if(a.producer === b.producer)
        {
          if(a.name > b.name) return 1;
          if(a.name < b.name) return -1;
        }
        if(a.producer > b.producer) return 1;
        if(a.producer < b.producer) return -1;
        return 0;
      })
      return result;
    });


    dispatch({
      type: GET_DATA,
      payload: res,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FAIL_TO_GETDATA,
      payload : null
    });
  }
};
