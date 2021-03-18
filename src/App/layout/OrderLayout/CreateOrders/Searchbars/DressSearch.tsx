import React, { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "semantic-ui-react";
import {
  CleanAction,
  FinishAction,
  StartAction,
  UpdateAction,
} from "../../../../stateManagment/action/searchInputActions/SearchInput";
import { RootStore } from "../../../../stateManagment/store/store";
import _ from "lodash";
import { DressGetOneAction } from "../../../../stateManagment/action/dataManagment/SalonDressActions/DressGetOneAction";
import ISalonDress from "../../../../models/salonDress";
import { enumRentConverter } from "../../../../utilities/enumConverter";
import { showStatus } from "../../../../utilities/Additional";
const checkIfOrder = (dress:ISalonDress)=>{
    if(dress.rentAgreement.length >0)
    {
      return enumRentConverter(dress.rentAgreement[0].status)
    }else 
    {
      return "Wolna"
    }
}
const DressSearch = () => {
  const state = useSelector((state: RootStore) => state.dressSearchReducer);
  const dress = useSelector((state: RootStore) => state.getDressData.data);
  const dispatch = useDispatch();
  const { loading, results, value } = state;
  const timeoutRef = useRef();
  const findDress = dress!.map((results) => {
    const result =  showStatus(results.rentAgreement,results.closingSalesAgrement)

      return {
        id: results.id,
        title: results.name,
        description: results.producer,
        price:result.toString(),
      };
    
  });

  const handleSearchChange = useCallback(
    (e, data) => {
      if (state) {
        clearTimeout(timeoutRef.current);
        dispatch(DressGetOneAction("", true, null));
        dispatch(StartAction(data.value));
        //@ts-ignore

        timeoutRef.current = setTimeout(() => {
          if (data.value.length === 0) {
            dispatch(CleanAction());
            return;
          }

          const re = new RegExp(_.escapeRegExp(data.value), "i");

          //@ts-ignore
          const isMatch = (result) => re.test(result.title);
          dispatch(FinishAction(_.filter(findDress, isMatch)));
        }, 300);
      }
    },
    [dispatch, findDress, state]
  );
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return (
    <Search
      onResultSelect={(e, data) => {
        dispatch(UpdateAction(data.result.title));
        dispatch(DressGetOneAction(data.result.id, false, dress));
      }}
      placeholder="Wybierz suknie z listy"
      loading={loading}
      onSearchChange={handleSearchChange}
      results={results}
      value={value}
    />
  );
};

export default DressSearch;
