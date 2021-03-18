import { Dispatch } from "@reduxjs/toolkit";
import {
  Clean,
  CLEAN,
  Clean_Client,
  CLEAN_CLIENT,
  Finish,
  Finish_Client,
  FINISH_SEARCH,
  FINISH_SEARCH_CLIENT,
  ISearchClient,
  ISearchDress,
  Start,
  Start_Client,
  START_SEARCH,
  START_SEARCH_CLIENT,
  Update,
  Update_CLient,
  UPDATE_CLIENT_SELECTION,
  UPDATE_SELECTION,
} from "./types/searchInputTypes";

export const CleanClientAction = () => (dispatch: Dispatch<Clean_Client>) => {
  dispatch({
    type: CLEAN_CLIENT,
  });
};
export const StartClientAction = (value: string) => (
  dispatch: Dispatch<Start_Client>
) => {
  dispatch({
    type: START_SEARCH_CLIENT,
    query: value,
  });
};
export const FinishClientAction = (dressTable: ISearchClient[]) => (
  dispatch: Dispatch<Finish_Client>
) => {
  console.log(dressTable);
  dispatch({
    type: FINISH_SEARCH_CLIENT,
    results: dressTable,
  });
};
export const UpdateClientAction = (result: string) => (
  dispatch: Dispatch<Update_CLient>
) => {
  dispatch({
    type: UPDATE_CLIENT_SELECTION,
    selection: result,
  });
};
export const CleanAction = () => (dispatch: Dispatch<Clean>) => {
  dispatch({
    type: CLEAN,
  });
};
export const StartAction = (value: string) => (dispatch: Dispatch<Start>) => {
  dispatch({
    type: START_SEARCH,
    query: value,
  });
};
export const FinishAction = (dressTable: ISearchDress[]) => (
  dispatch: Dispatch<Finish>
) => {
  console.log(dressTable);
  dispatch({
    type: FINISH_SEARCH,
    results: dressTable,
  });
};
export const UpdateAction = (result: string) => (
  dispatch: Dispatch<Update>
) => {
  dispatch({
    type: UPDATE_SELECTION,
    selection: result,
  });
};
