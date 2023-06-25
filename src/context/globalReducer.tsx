import globalConstants from "./globalConstants";

const { UPDATE_MONTH, SET_TRANSACTION_LIST, DELETE_TRANSACTION } =
  globalConstants;

const globalReducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_MONTH:
      return {
        ...state,
        currentMonth: action.payload,
      };
    case SET_TRANSACTION_LIST:
      return {
        ...state,
        transactionsList: action.payload,
      };

    case DELETE_TRANSACTION:
      // const newList = [...state.transactionsList].filter(
      //   (item: any) => item.id !== action.payload
      // );
      return {
        ...state,
        // transactionsList: newList,
      };
    default:
      return { ...state };
  }
};

export default globalReducer;
