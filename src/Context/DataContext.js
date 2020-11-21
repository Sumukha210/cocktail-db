import React, { createContext, useEffect, useReducer, useState } from "react";
import {
  ADDDATA,
  DataReducer,
  ISERROR,
  ISLOADING,
} from "../reducers/DataReducer";
import axios from "axios";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState(null);

  const [state, dispatch] = useReducer(DataReducer, {
    alldata: [],
    specificdata: [],
    loading: false,
    error: "",
  });

  const setSearchTermFun = val => setSearchTerm(val);

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?`;

  const fetchData = async () => {
    dispatch({ type: ISLOADING });

    const {
      data: { drinks },
    } = await axios.get(searchTerm ? `${url}s=${searchTerm}` : `${url}f=a`);

    drinks
      ? dispatch({ type: ADDDATA, payload: drinks })
      : dispatch({ type: ISERROR, payload: "INVALID SEARCH" });
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm, setSearchTerm]);

  return (
    <DataContext.Provider value={[state, dispatch, setSearchTermFun]}>
      {children}
    </DataContext.Provider>
  );
};
