import { createContext, useContext, useReducer } from "react";
import globalReducer from "./globalReducer";
import globalConstants from "./globalConstants";

const { UPDATE_MONTH, SET_TRANSACTION_LIST, DELETE_TRANSACTION } =
  globalConstants;

// INTERFACE
interface IInitialState {
  currentMonth: string;
  transactionsList: Array<object> | null;
  updateMonth: (val: string) => {};
  setTransactionList: (val: Array<object>) => {};
  deleteTransaction: (val: number) => {};
}

// INITIAL STATE HERE
const initialState: any = {
  currentMonth: "Enero",
  transactionsList: null,
};

// CREATE CONTEXT AND BIND INITIALSTATE WITHIN
const Context = createContext<IInitialState | null>(initialState);

// CUSTOM HOOK TO FETCH AND UPDATE THE STATE
export const useGlobal = () => {
  const contextValue = useContext(Context);
  if (!contextValue) {
    throw new Error("useGlobal hook must be called from GlobalProvider");
  }
  return contextValue;
};

// GLOBAL PROVIDER, ADD THIS IN YOUR APP.TSX TREE, WRAPPING COMPONENTS
export const GlobalProvider = (props: any) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  // ACTIONS
  const updateMonth = (newVal: string) => {
    return dispatch({
      type: UPDATE_MONTH,
      payload: newVal,
    });
  };
  const setTransactionList = (listArray: Array<object>) => {
    return dispatch({
      type: SET_TRANSACTION_LIST,
      payload: listArray,
    });
  };

  const deleteTransaction = (transactionId: number) => {
    return dispatch({
      type: DELETE_TRANSACTION,
      payload: transactionId,
    });
  };

  const value = {
    currentMonth: state.currentMonth,
    transactionsList: state.transactionsList,
    updateMonth,
    setTransactionList,
    deleteTransaction,
  };

  // RETURNED PROVIDER
  return <Context.Provider value={value} {...props} />;
};
