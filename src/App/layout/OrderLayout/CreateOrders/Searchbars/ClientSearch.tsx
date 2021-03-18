import React, { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "semantic-ui-react";
import { RootStore } from "../../../../stateManagment/store/store";
import _ from "lodash";
import { GetOneClient } from "../../../../stateManagment/action/dataManagment/ClientActions/ClientGetOneAction";
import {
  CleanClientAction,
  FinishClientAction,
  StartClientAction,
  UpdateClientAction,
} from "../../../../stateManagment/action/searchInputActions/SearchInput";

const ClientSearch = () => {
  const state = useSelector((state: RootStore) => state.clientSearchReducer);
  const client = useSelector((state: RootStore) => state.getClientData.data);
  const dispatch = useDispatch();
  const { loading, results, value } = state;
  const timeoutRef = useRef();
  const FindClient = client!.map((results) => {
    return {
      id: results.id,
      title: results.surname,
      description: results.name,
      price: results.phoneNumber.toString(),
    };
  });

  const handleSearchChange = useCallback((e, data) => {
    if (state) {
      clearTimeout(timeoutRef.current);
      dispatch(GetOneClient("", true, null));
      dispatch(StartClientAction(data.value));
      //@ts-ignore

      timeoutRef.current = setTimeout(() => {
        if (data.value.length === 0) {
          dispatch(CleanClientAction());
          return;
        }

        const re = new RegExp(_.escapeRegExp(data.value), "i");

        //@ts-ignore
        const isMatch = (result) =>  re.test(_.concat(result.title,result.price));
        dispatch(FinishClientAction(_.filter(FindClient, isMatch)));
      }, 300);
    }
  }, [FindClient,dispatch,state]);
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return (
    <Search
      
      onResultSelect={(e, data) => {
        dispatch(UpdateClientAction(data.result.title));
        dispatch(GetOneClient(data.result.id, false, client));
      }}
      loading={loading}
      onSearchChange={handleSearchChange}
      results={results}
      value={value}
      placeholder="Wybierz klienta z listy"
    />
  );
};

export default ClientSearch;
