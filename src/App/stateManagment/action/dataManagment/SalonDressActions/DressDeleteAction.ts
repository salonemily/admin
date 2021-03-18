import { Dispatch } from "@reduxjs/toolkit";
import agent from "../../../../api/agnet";
import {
  DeleteDressType,
  DELETE_DATA,
  FAIL_TO_DELETE_DATA,
} from "./types/DressActionType";
export const DeleteDress = (id: string) => async (
  dispatch: Dispatch<DeleteDressType>
) => {
  try {
    await agent.dress.delete(id);
    dispatch({
      type: DELETE_DATA,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FAIL_TO_DELETE_DATA,
    });
  }
};

export default DeleteDress;
