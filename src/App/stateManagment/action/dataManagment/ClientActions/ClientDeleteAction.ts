import { Dispatch } from "@reduxjs/toolkit";
import agent from "../../../../api/agnet";
import {
  DeleteClientType,
  DELETE_CLIENT,
  FAIL_TO_DELETE_CLIENT,
} from "./types/ClientActionType";
export const DeleteClient = (id: string) => async (
  dispatch: Dispatch<DeleteClientType>
) => {
  try {
    await agent.client.delete(id);
    dispatch({
      type:  DELETE_CLIENT,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type:  FAIL_TO_DELETE_CLIENT,
    });
  }
};

